import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="main">
      <div className="title">{props.pageName}</div>
      <div className="pageContent"><p>This is an exercise in Github webpage to experience how REACT JSX is applied. Comparing to Class Function, REACT Hook is selected as it is more flexible to interact with different web pages. In this exercise, useState, useEffect and Router etc. are included. REACT V6 makes the structure easier than pervious version.</p><p>Although JavaScript, HTML and CSS have been used for years, this exercise still requires certain time to understand REACT especially it is easy to be confused with some online articles which are using V5. It is the first REACT exercise and GUI design. After more practices are done, technique of using REACT should be enhanced.</p><p>For privacy, all video and audio are processed in the browser environment. There is no server connection as it is the nature of Github. Hence, there is not any records to be transferred to any unknown backend.</p><p>At last, an Object Detection page which is based on TensorFlow.js is added. The dataset is CoCo and model is SSD.</p></div>
    </div>
  );
}

export default Home;