import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactPlayer from "react-player";
import ColorImg from "./color-img";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="triangle-container">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Player</h1>
      <div>
        <ReactPlayer
          className="logo react"
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        />
      </div>
      <div>
        <div className="circle">
          <img
            src="https://y.qq.com/music/photo_new/T002R300x300M000000vtKmF3OEIbF_2.jpg?max_age=2592000"
            alt="music img"
          />
        </div>
      </div>
      {/* <div>
        <ColorImg />
      </div> */}
    </div>
  );
}

export default App;
