import React from "react";
import "./About.css";

function About(props) {
  return (
    <div>
      <div className="title">{props.pageName}</div>
      <div className="paragraph"><p>The main stream in this exercise is REACT HOOK. In order to make this in Github web page while showing some features, there is not server end service to be involved. The features include capturing Video and Audio which are easily connected by Web Browsers in every laptop.</p><p>There are three buttons in Video and Audio page. Users can start recording; stop recording and download the recording. Please feel free to test.</p></div>
    </div>
  );
}

export default About;