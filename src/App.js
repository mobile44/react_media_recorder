import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Video from "./Video";
import Audio from "./Audio";
import useRWD from "./useRWD";

function App() {
  const device=useRWD();
  const [getTime, setTime] = useState(new Date());
  useEffect(()=>{
    const id = setInterval(()=>setTime(new Date()),1000);
    return()=>{clearInterval(id)};
    },[]);
  return (
    <Router>
      <div className="top">
        <span className="spanLeft">
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/video">
            Video
          </Link>
          <Link className="link" to="/audio">
            Audio
          </Link>
        </nav>
        </span>
        <span className="spanRight">
          {getTime.toLocaleDateString()} {getTime.toLocaleTimeString()} ({device})
        </span>
        <div className="divBreak"/>
      </div>
      <Routes>
        <Route path="/" element={<Home pageName="Home"/>} />
        <Route path="/react_media_recorder" element={<Home pageName="Home"/>} />
        <Route path="/about" element={<About pageName="About"/>} />
        <Route path="/video" element={<Video pageName="Video"/>} />
        <Route path="/audio" element={<Audio pageName="Audio"/>} />
      </Routes>
    </Router>
  );
}
export default App;
