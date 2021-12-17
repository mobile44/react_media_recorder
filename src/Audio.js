import React from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import "./Audio.css";

function Audio(props) {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    audio: true,
    blobPropertyBag: {type: "audio/wav"}
  })
  let btnStart, btnStop, btnDownload;
  const startedRec = () => {
    startRecording();
  }
  const stoppedRec = async () => {
    stopRecording();
  }
  const downloadRec = () => {
    let link = document.createElement("a");
    link.setAttribute("href", mediaBlobUrl);
    link.setAttribute("download", "demo.wav");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    try {
      let http = new XMLHttpRequest();
      http.open('HEAD', link, false);
      http.send();
      console.log(http.status);
    } catch {
      console.log("File exist!");
      link.click();
    }
    document.body.removeChild(link);
  }
  if (status==="stopped") {
    btnDownload="btnEnable";
  } else {
    btnDownload="btnDisable";
  }
  if (status==="idle" || status==="stopped") {
    btnStart = "btnEnable";
    btnStop = "btnDisable";
  } else {
    btnStart = "btnDisable";
    btnStop = "btnEnable";
  }
  return (
    <div className="main">
      <div className="title">{props.pageName}</div>
      <div className="pageContent">
        <div className="button">
          <button className={btnStart} onClick={startedRec}>Start Recording</button>
          <button className={btnStop} onClick={stoppedRec}>Stop Recording</button>
          <button className={btnDownload} onClick={downloadRec}>Download Recording</button>
        </div>
        <div className="status">STATUS: {status}</div>
        <div>
          <audio src={mediaBlobUrl} controls autoPlay loop/>
        </div>
      </div>
    </div>
  );
}
  
export default Audio;