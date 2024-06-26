import { useState, useEffect } from "react";

// import "./App.css";
import spinaci from "#/pizzas/spinaci.jpg";
import React from "react";
import "#/index.css";
// import pizzaData from "#/data.js"
// 因为使用纯函数, 所以react的变量是不可变的;

// react还使用单向数据流, 一般从父组件到子组件, 而不能反过来;

// 相对于angular的双向;
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 20;
const isOpen = hour > openHour && hour < closeHour;

function App() {
  isOpen
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
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: spinaci,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: spinaci,
      soldOut: false,
    },
  ];
  return (
    <div className="menu">
      <h2>our Menu</h2>
      <div
        className="warpper"
        style={{
          // display:"grid",
          // gridTemplate:"50% 50%"
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
              key={pizza.name}
            />
          );
        })}
      </div>
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

  return (
    <>
      <footer className="footer">
        {time} &copyright; 2021 Fast React Pizza Co.
      </footer>
      <div>
        {isOpen ? (
          <p> We're open untill{closeHour}:00. Come visit us or order online! </p>
        ):
        (
          <p>We will open in {openHour}:00. Please come at that time!</p>
        )}
      </div>
    </>
  );
}

function Pizza({ name, ingredients, photoName, price, soldOut }) {

  // 通过soldOut字段来消除已经卖完了的pizza
  // if(soldOut) return null; 
  return (
    <div
    // 通过模版字符串来添加一个类; 
      className={`pizza ${soldOut?'sold-out':''}`}
      style={{
        width: "30rem",
      }}
    >
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
}
export default App;
