import React, {useRef, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Webcam from "react-webcam"; // importing react webcam to access computer webcam
import * as tf from "@tensorflow/tfjs"; // importing tensorflowjs libraries
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";




function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const labelMap = {
        1:{name:'नमस्कार', color:'red'},
        2:{name:'क', color:'yellow'},
        3:{name:'ख', color:'lime'},
        4:{name:'ग', color:'blue'},
    }
    const [value, setValue] = useState('');
    const  [text, setText] = useState('');

   const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
        for(let i=0; i<=boxes.length; i++){
            if(boxes[i] && classes[i] && scores[i]>threshold){
                // Extract variables
                const [y,x,height,width] = boxes[i]
                const text = classes[i]

                // Set styling
                ctx.strokeStyle = labelMap[text]['color']
                ctx.lineWidth = 6
                ctx.fillStyle = 'white'
                ctx.font = '30px Arial'

                // DRAW!!
                ctx.beginPath()
                ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
                ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
                ctx.stroke()

                setValue(labelMap[text]['name']);

                setText((prevState)=>prevState  + " " + labelMap[text]['name'])
            }

        }
    }
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    const net = await tf.loadGraphModel('https://nepalisign.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [360,360])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)

      // console.log(await obj[2].array())


      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.85, videoWidth, videoHeight, ctx)});

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);


        return (
            <div className="App">
                <Container>
                    <br />
                    <h1>Detect From WebCam in Realtime</h1>
                    <div className="App-header">
                        <div className="wrap">
                            <Row >
                                <Webcam className="webcam"
                                        ref={webcamRef}
                                        muted={true}
                                        imageSmoothing={false}
                                />
                                <canvas className="canvas"
                                        ref={canvasRef}
                                />
                            </Row>
                        </div>
                        <br />
                        <Row>
                            <div className="predictions">
                                <p id='target' >{value}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="predictions">
                                <textarea  rows="10" cols="40" value={text} >  </textarea>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        );

}


export default App;

