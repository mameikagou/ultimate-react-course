import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import "@/css/App.css";
import { Button } from "antd";
// import "antd/dist/antd.css";
import "@css/index.css"

import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Link to="/LazyLoadComponent">
          <Button type="default">Button</Button>
        </Link>
        <Link to="/Hooks">
          <Button type="default">Hooks</Button>
        </Link>
        <Link to="/SelectFromMysql">
          <Button type="default">SelectFromMysql</Button>
        </Link>
        <Link to="/Login">
          <Button type="default">Login</Button>
        </Link>
      </div>
    </>
  );
}

export default App;
