import { useState, useEffect } from "react";

// import "./App.css";
import spinaci from "#/pizzas/spinaci.jpg";
import React from "react";
import "#/index.css";


// 因为使用纯函数, 所以react的变量是不可变的; 

// react还使用单向数据流, 一般从父组件到子组件, 而不能反过来; 

// 相对于angular的双向; 


function App() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  hour > openHour && hour < closeHour
    ? console.log(
        `Sorry, we are closed now. Open daily from ${openHour}:00 to ${closeHour}:00`
      )
    : console.log(
        `We are open now. Open daily from ${openHour} to ${closeHour}`
      );

  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  const HeaderStyle = {};

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Spinach, mozzarella, tomato sauce, garlic, olive oil"
        photoName={spinaci}
        price="12.50"
      ></Pizza>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Spinach, mozzarella, tomato sauce, garlic, olive oil"
        photoName={spinaci}
        price="12.50"
      ></Pizza>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Spinach, mozzarella, tomato sauce, garlic, olive oil"
        photoName={spinaci}
        price="12.50"
      ></Pizza>
    </div>
  );
}
function Footer() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString); // 这里居然是个函数调用吗

  // useEffect好像会导致这个组件一直刷新; 导致旁边的东西, 一直在闪烁
  useEffect(
    () => {
      const timeId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timeId);
    },
    [] // 空依赖项数组表示该效果仅在组件挂载时运行一次
  );

  return React.createElement(
    "footer",
    { className: "footer" },
    `${time}  &copyright; 2021 Fast React Pizza Co.`
  );
}

function Pizza({ name, ingredients, photoName, price }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
export default App;
