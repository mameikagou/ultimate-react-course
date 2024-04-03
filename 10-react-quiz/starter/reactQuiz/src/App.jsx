import { useState } from "react";
import DateCounter from "../resource/DateCounter.jsx";
import Header from "../resource/Header.jsx";
import Loader from "../resource/Loader.jsx";
import Main from "../resource/Main.js";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="AppWrapper">
        {/* <DateCounter /> */}
        <Header />

      </div>
    </>
  );
}

export default App;
