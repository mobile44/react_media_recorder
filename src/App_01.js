import React, { Component } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
//import Home from "./Home";
//import About from "./About";
//import Video from "./Video";

class App extends Component{
  constructor(props) { 
    super(props);
    //this.name="舊的名字";
    this.state={
      name:"舊的名字"
    };
    this.changeName=this.changeName.bind(this); //綁定至自己
  }
  changeName(){ // 定義changeName
    this.setState({
      name:"綁定至自己"
    });
    console.log("hey");
  }
  render(){
    return(
      <button onClick={this.changeName}>{this.state.name}</button>
      /* 修改onClick和name */
    );
  }
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
