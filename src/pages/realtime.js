import React, { useRef, useEffect, useState, useCallback } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

const labelMap = {
  1: { name: "नमस्कार", color: "#BB86FC" },
  2: { name: "क", color: "#03DAC6" },
  3: { name: "ख", color: "#FFDE03" },
  4: { name: "ग", color: "#03DAC6" },
  5: { name: " ", color: "#FFFFFF" },
};

const Realtime = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const textAreaRef = useRef(null);
  
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [isMirrored, setIsMirrored] = useState(true);
  const [status, setStatus] = useState("Initializing...");

  // Load Model
  useEffect(() => {
    const loadModel = async () => {
      try {
        setStatus("Loading Model...");
        const net = await tf.loadGraphModel("https://nslrsv2.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json");
        setModel(net);
        setLoading(false);
        setStatus("Ready");
      } catch (error) {
        console.error("Failed to load model", error);
        setStatus("Error Loading Model");
      }
    };
    loadModel();
  }, []);

  const drawRect = useCallback((boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    if (!ctx) return;
    ctx.clearRect(0, 0, imgWidth, imgHeight); 

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] && classes[i] && scores[i] > threshold) {
        let [y, x, height, width] = boxes[i];
        const classIdx = classes[i];
        
        // Scale to pixels
        let rectWidth = width * imgWidth;
        let rectHeight = height * imgHeight;
        let rectX = isMirrored ? imgWidth - (x * imgWidth + rectWidth) : x * imgWidth;
        let rectY = y * imgHeight;

        // CLAMP: Keep box on screen
        rectX = Math.max(0, Math.min(rectX, imgWidth - rectWidth));
        rectY = Math.max(0, Math.min(rectY, imgHeight - rectHeight));
        
        const labelInfo = labelMap[classIdx] || { name: "Unknown", color: "#FFFFFF" };
        
        ctx.strokeStyle = labelInfo.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

        ctx.fillStyle = labelInfo.color;
        ctx.font = "bold 14px Inter, sans-serif";
        const label = `${labelInfo.name} ${(scores[i] * 100).toFixed(0)}%`;
        const textHeight = 22;
        const textWidth = ctx.measureText(label).width + 8;
        
        // SMART LABEL POSITION: If at top, draw label inside the box
        const labelY = rectY < textHeight ? rectY + rectHeight : rectY - textHeight;
        
        ctx.fillRect(rectX, labelY, textWidth, textHeight);
        ctx.fillStyle = "#000000";
        ctx.fillText(label, rectX + 4, labelY + 16);

        setText(prev => (prev === "" ? "" : prev + (labelInfo.name === " " ? "" : " ")) + labelInfo.name);
      }
    }
  }, [isMirrored]);

  const detect = useCallback(async (net) => {
    if (webcamRef.current?.video?.readyState === 4) {
      const video = webcamRef.current.video;
      const { videoWidth, videoHeight, clientWidth, clientHeight } = video;

      if (videoWidth === 0) return;

      if (canvasRef.current) {
        canvasRef.current.width = clientWidth;
        canvasRef.current.height = clientHeight;
      }

      // Step 1: Capture whole frame
      const img = tf.browser.fromPixels(video);
      
      // Step 2: Center crop to square (matching object-fit: cover)
      const size = Math.min(videoWidth, videoHeight);
      const centerHeight = videoHeight / 2;
      const beginHeight = centerHeight - (size / 2);
      const centerWidth = videoWidth / 2;
      const beginWidth = centerWidth - (size / 2);
      
      // normalized coordinates for crop
      const offsetHeight = beginHeight / videoHeight;
      const offsetWidth = beginWidth / videoWidth;
      const cropHeight = size / videoHeight;
      const cropWidth = size / videoWidth;

      const cropped = tf.image.cropAndResize(
        img.expandDims(0).cast('float32'), 
        [[offsetHeight, offsetWidth, offsetHeight + cropHeight, offsetWidth + cropWidth]], 
        [0], 
        [360, 360]
      );

      const expanded = cropped.cast("int32");
      
      try {
        const obj = await net.executeAsync(expanded);
        const [boxes, classes, scores] = await Promise.all([
          obj[1].array(), obj[2].array(), obj[4].array()
        ]);

        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          // Apply a 0.85 shrink factor to make boxes tighter
          const processedBoxes = boxes[0].map(box => {
              if (!box) return null;
              const [y, x, h, w] = box;
              const shrink = 0.85;
              const newH = h * shrink;
              const newW = w * shrink;
              return [
                  y + (h - newH) / 2,
                  x + (w - newW) / 2,
                  newH,
                  newW
              ];
          });
          drawRect(processedBoxes, classes[0], scores[0], 0.8, clientWidth, clientHeight, ctx);
        }

        tf.dispose([img, cropped, expanded, obj]);
        if (Array.isArray(obj)) obj.forEach(t => t.dispose());

      } catch (err) {
        tf.dispose([img, cropped, expanded]);
      }
    }
  }, [drawRect]);



  // Continuous Detection Loop
  useEffect(() => {
    let animationId;
    let isProcessing = false;
    let lastDetectionTime = 0;

    const runDetection = async (timestamp) => {
      if (!model) return;

      // Detection Interval (every 1 second)
      if (timestamp - lastDetectionTime >= 1000 && !isProcessing) {
        isProcessing = true;
        try {
          await detect(model);
          lastDetectionTime = timestamp;
        } finally {
          isProcessing = false;
        }
      }
      animationId = requestAnimationFrame(runDetection);
    };

    if (model) {
      console.log("Model is loaded, starting detection loop...");
      setStatus("Pre-warming...");
      // Wrap in a small timeout to let the UI settle
      const timer = setTimeout(() => {
         animationId = requestAnimationFrame(runDetection);
         setStatus("Ready");
      }, 500);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animationId);
      };
    }
  }, [model, detect]);

  useEffect(() => {
    if (textAreaRef.current) textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  }, [text]);

  return (
    <div className="min-h-screen bg-base-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black mb-2">Real-time <span className="text-primary">Detection</span></h1>
            <div className="flex items-center gap-2">
              <span className={`badge badge-sm ${status === "Ready" ? 'badge-success' : 'badge-warning'} animate-pulse`}></span>
              <span className="text-sm opacity-70 font-mono uppercase tracking-widest">
                {status === "Ready" ? "Ready" : "Wait..."}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsMirrored(!isMirrored)} className="btn btn-sm btn-outline gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="M9 21H3v-6"/><path d="m3 21 7-7"/></svg>
              {isMirrored ? "Normal" : "Mirror"}
            </button>
            <button onClick={() => {setText("");}} className="btn btn-sm btn-error btn-outline gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-black aspect-square shadow-2xl border-4 border-base-100 ring-1 ring-base-content/10 max-h-[70vh] mx-auto">
              <Webcam
                ref={webcamRef}
                muted={true}
                mirrored={isMirrored}
                className="w-full h-full object-cover"
                videoConstraints={{ width: 720, height: 720, facingMode: "user" }}
              />
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
              {loading && (
                <div className="absolute inset-0 flex flex-center bg-black/60 backdrop-blur-sm z-50">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-base-100 rounded-3xl p-6 shadow-xl border border-base-content/10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Output Script
                </h3>
                <button 
                  onClick={() => {navigator.clipboard.writeText(text)}}
                  className="btn btn-ghost btn-xs text-primary"
                >
                  Copy
                </button>
              </div>
              <textarea
                ref={textAreaRef}
                readOnly
                value={text}
                className="textarea textarea-ghost w-full flex-1 text-xl font-medium leading-relaxed resize-none focus:outline-none placeholder:text-base-content/20"
                placeholder="Start signing to see the translation here..."
              />
            </div>
            
            <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Instructions</p>
              <ul className="text-sm space-y-2 text-base-content/80">
                <li className="flex gap-2"><span>1.</span> Ensure good lighting on your hands.</li>
                <li className="flex gap-2"><span>2.</span> Keep your hand within the frame.</li>
                <li className="flex gap-2"><span>3.</span> Hold the sign for about 1 second.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
