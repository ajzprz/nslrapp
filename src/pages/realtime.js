import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam"; // importing react webcam to access computer webcam
import * as tf from "@tensorflow/tfjs"; // importing tensorflowjs libraries
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";

function Realtime() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelMap = {
    1: { name: "नमस्कार", color: "red" },
    2: { name: "क", color: "yellow" },
    3: { name: "ख", color: "lime" },
    4: { name: "ग", color: "blue" },
    5: { name: " ", color: "white" },
  };
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const createBox = (
    boxes,
    classes,
    scores,
    threshold,
    imgWidth,
    imgHeight,
    ctx
  ) => {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] && classes[i] && scores[i] > threshold) {
        // Extract variables
        const [y, x, height, width] = boxes[i];
        const text = classes[i];

        // Set styling
        ctx.strokeStyle = labelMap[text]["color"];
        ctx.lineWidth = 6;
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";

        // Draw!!
        ctx.beginPath();
        ctx.fillText(
          labelMap[text]["name"] + " - " + Math.round(scores[i] * 100) / 100,
          x * imgWidth,
          y * imgHeight - 10
        );
        ctx.rect(
          x * imgWidth,
          y * imgHeight,
          width * imgWidth,
          height * imgHeight
        );
        ctx.stroke();

        setValue(labelMap[text]["name"]);
        setText((prevState) => prevState + " " + labelMap[text]["name"]);
      }
    }
  };

  // Main function
  const runCoco = async () => {
    try {
      const net = await tf.loadGraphModel(
        "https://nslrsv2.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      );
      detect(net);
    } catch (error) {
      console.error("Error loading the model", error);
    }
  };

  const detect = async (net) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      console.log("Video Properties: ", { videoWidth, videoHeight });

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [360, 360]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);

      // Log the tensor shape before passing to the model
      console.log("Tensor shape before passing to model:", expanded.shape);

      const obj = await net.executeAsync(expanded);

      // Log the model output
      console.log("Model output: ", obj);

      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      console.log("Detection Results: ", { boxes, classes, scores });

      const ctx = canvasRef.current.getContext("2d");

      requestAnimationFrame(() => {
        createBox(
          boxes[0],
          classes[0],
          scores[0],
          0.75,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose([img, resized, casted, expanded, obj]);
    }
  };
  
  useEffect(() => {
    runCoco();
  }, []);

  const [copySuccess, setCopySuccess] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Predictions Copied Successfully!");
  }

  function eraseText(e) {
    setText("");
    setDeleteSuccess("Predictions Deleted Successfully!");
  }

  const videoConstraints = {
    width: 360,
    height: 360,
    facingMode: "user",
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <div className="title">
            <h1>Detect From WebCam in Realtime</h1>
          </div>
        </Row>
        <Row>
          <div className="App-header">
            <Webcam
              className="webcam"
              ref={webcamRef}
              muted={true}
              imageSmoothing={false}
              videoConstraints={videoConstraints}
            />
            <canvas className="canvas" ref={canvasRef} />
          </div>
        </Row>
        <Row>
          <div className="predictions">
            <form action="">
              <textarea
                ref={textAreaRef}
                rows="10"
                cols="40"
                value={text}
                placeholder="Your Signs Predictions"
                id="output"
              />
              <Row>
                <Button
                  variant="info"
                  className="center"
                  onClick={copyToClipboard}
                >
                  Copy
                </Button>
                <Button variant="danger" className="center" onClick={eraseText}>
                  Clear
                </Button>
              </Row>
              <div className="text-center">
                {copySuccess}
                {deleteSuccess}
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Realtime;
