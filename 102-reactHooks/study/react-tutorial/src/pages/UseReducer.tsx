import { useReducer, useState } from "react";
import { types } from "web3";

export default function UseReducer() {
  // const [count,setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "Add", payload: 1 })}>
          加1
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "Minus", payload: 1 })}>
          减1
        </button>
      </div>
    </>
  );
}

// 其实就是封装对一个变量的多个操作;

// 第一个是count, 第二个是dispach的;
function countReducer(count: number, { type, payload }: any) {
  switch (type) {
    case "Add":
      return count + payload;
    case "Minus":
      return count - payload;
    default:
      return count;
  }
}

export function Ages() {
  const [ages, dispatchAges] = useReducer(countAges, 0);

  const add = (type) => {
    // 记得只需要一个箭头函数, 这里用了, 下面就没必要用; 
    return dispatchAges({ type: type, payload: 5 });
  };
  return (
    <>
      <span>增减你的年龄: </span>
      {ages}
      <button onClick={() => add("Add")}>点我!!!</button>
    </>
  );
}

function countAges(num: number, { type, payload }: any) {
  switch (type) {
    case "Add":
      return num + payload;
    case "Minus":
      return num - payload;
  }
}
