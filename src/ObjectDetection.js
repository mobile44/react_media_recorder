import React, { useEffect, useState, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import './ObjectDetection.css';

function ObjectDetection(props) {
  const webcamRef = useRef(null);
  const videoWidth = 960;
  const videoHeight = 640;
  const videoConstraints = {
    height: {videoHeight},
    width: {videoWidth},
    maxWidth: "100vw",
    facingMode: "user",
  };
  /*
  async function drawMe() {
    let canvas = document.getElementById("camCanvas");
    let ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 80, 80);
  }
  */
  const [loaded, setload] = useState(0);
  const [model, setModel] = useState();
  const [object, setObject] = useState();
  const [rate, setRate] = useState();
  const [clicked, setClick] = useState(0);
  async function loadModel() {
    try {
      const model = await cocoSsd.load();
      setload(1);
      setModel(model);
      console.log("setloadedModel");
    } catch (err) {
      console.log(err);
      console.log("failed load model");
    }
  }
  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);
  async function predictMe() {
    try {
      const predictions = await model.detect(document.getElementById("img"));
      setClick(1);
      let cnvs = document.getElementById("camCanvas");
      let ctx = cnvs.getContext("2d");
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = "#FF0000";
      ctx.clearRect(
        0,
        0,
        webcamRef.current.video.videoWidth,
        webcamRef.current.video.videoHeight
      )
      if (predictions.length > 0) {
        //console.log(predictions);
        for (let i = 0; i < predictions.length; i++) {
          let predictObject = predictions[i].class;
          let predictRate = Math.round(parseFloat(predictions[i].score) * 100);
          let bboxLeft = predictions[i].bbox[0];
          let bboxTop = predictions[i].bbox[1];
          let bboxWidth = predictions[i].bbox[2];
          let bboxHeight = predictions[i].bbox[3] - predictions[i].bbox[1];
          ctx.beginPath();
          ctx.fillRect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
          //console.log("Object: ", predictObject);
          //console.log("Percent: ", predictRate);
          setObject(predictObject);
          setRate(predictRate);
          //console.log("Left: ", bboxLeft);
          //console.log("Top: ", bboxTop);
          //console.log("Width: ", bboxWidth);
          //console.log("Height: ", bboxHeight); 
        }
      }
      setTimeout(() => predictMe(), 500);
    } catch (err) {
      console.log("Exited Detection!")
    }
  }

  return (
      <div className="main">
        <div className="title">{props.pageName}</div>
        <div className="pageContent">
          {loaded===0 && <div className="lds-ellipsis">Loading...<div></div><div></div><div></div><div></div></div>}
          {loaded===1 &&
            <div className="button">
              <button onClick={()=>{predictMe()}}>Predict</button>
              {object}{clicked===1 && ":"} {rate}{clicked===1 && "%"}
            </div>
          }
          <div className="screen">
            <canvas id="camCanvas" width={videoWidth} height={videoHeight} />
          </div>
          <div className="webcam">
            <Webcam
              audio={false}
              id="img"
              ref={webcamRef}
              screenshotQuality={1}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
        </div>
      </div>
  )
}

export default ObjectDetection;