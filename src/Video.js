import React from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import "./Video.css";

function Video(props) {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    blobPropertyBag: {type: "video/mp4"}
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
    link.setAttribute("download", "demo.mp4");
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
    <div className="pageContent">
      <div className="title">{props.pageName}</div>
      <div className="button">
        <button className={btnStart} onClick={startedRec}>Start Recording</button>
        <button className={btnStop} onClick={stoppedRec}>Stop Recording</button>
        <button className={btnDownload} onClick={downloadRec}>Download Recording</button>
      </div>
      <div className="status">STATUS: {status}</div>
      <div>
        <video width={320} height={240} src={mediaBlobUrl} controls autoPlay loop />
      </div>
    </div>
  );
}
  
export default Video;