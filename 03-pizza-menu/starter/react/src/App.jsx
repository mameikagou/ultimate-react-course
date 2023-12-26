import { useState, useEffect } from "react";

import "./App.css";
import spinaci from "#/pizzas/spinaci.jpg";
import React from "react";

function App() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  (hour > openHour && hour < closeHour)
    ? console.log(`Sorry, we are closed now. Open daily from ${openHour}:00 to ${closeHour}:00`)
    : console.log(`We are open now. Open daily from ${openHour} to ${closeHour}`);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </>
  );
}

function Header() {
  return (
    <>
      <h2>Fast React Pizza Co.</h2>
    </>
  );
}
function Menu() {
  return (
    <>
      <h3>Menu</h3>
      <Pizza></Pizza>
      <Pizza></Pizza>
      <Pizza></Pizza>
    </>
  );
}
function Footer() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString); // 这里居然是个函数调用吗
  
  // useEffect好像会导致这个组件一直刷新; 导致旁边的东西, 一直在闪烁
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeId);
  }, []// 空依赖项数组表示该效果仅在组件挂载时运行一次
  );

  return React.createElement(
    "footer",
    null,
    `${time}  &copyright; 2021 Fast React Pizza Co.`
  );
}

function Pizza() {
  return (
    <>
      <img src={spinaci}></img>
      <h4>Pizza Spinaci</h4>
      <p>Spinach, mozzarella, tomato sauce, garlic, olive oil</p>
    </>
  );
}
export default App;
