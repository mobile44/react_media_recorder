import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
//import Home from "./Home";
//import About from "./About";
//import Video from "./Video";

const App=()=> {
  const [name, changeName] = useState("舊的名字");
  

  return(
    <button onClick={()=>{changeName("綁定至自己")}}>{name}</button>
  );

}
/*
function App() {
  return (
    <Router>
      <div className="top">
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
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home pageName="Home"/>} />
        <Route path="/about" element={<About pageName="About"/>} />
        <Route path="/video" element={<Video pageName="Video"/>} />
      </Routes>
    </Router>
  );
}
*/
export default App;
