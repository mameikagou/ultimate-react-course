import { useEffect, useState } from "react";

import { message } from "antd";

import UseEffect_Chat from "./UseEffect_Chat";

import UseContext_example from "@pages/UseContext_example";

import UseReducer from "@pages/UseReducer";
import { Ages } from "@pages/UseReducer";

import Memo from "./Memo_example";

/**
 * Hooks: 
 * useEffect: useEffect is a React Hook that lets you synchronize a component with an external system.
 * 
 * 
 * useRef: useRef is a React Hook that let you reference a value that's not needed for rending; 
 * 
 * useContext: useContext is a React Hook that lets you read and subscribe to context from your component.
 * 就是父传子
 * 
 * useReducer: useReducer is a React Hook that lets you add a reducer to your component.
 *  const [state, dispatch] = useReducer(reducer, initialArg, init?)
 * It's related to useState, but it lets you extract complex logic into a reducer function.
 * 
 * useMemo: useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
 * 就是类似于computed, 你可以把计算的结果缓存起来, 以便下次使用;从而优化性能; 
 * const cachedValue = useMemo(calculateValue, dependencies)
 * 
 */


/**
 * Readme: 后续你的useEffect, 还有诸多问题; 之后再来看; 
 * @returns 
 */

export default function HooksMain() {
  return (
    <>
      <div>
        <Effect />
      </div>
      <br />
      <div>
        <UseEffect_Chat />
      </div>
      <div>
        <UseContext_example />
      </div>
      <div>
        <UseReducer />
        <div>第二个Reducer
          <br></br>
        </div>
        <Ages />
      </div>
      <div>
        <Memo />
      </div>
    </>
  );
}

function Effect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    message.info(`You clicked ${count} times`);
    // 这里是一个effect, 会在每次渲染后执行
    return () => {
      message.info(`You clicked ${count} times`);
      // 这里是一个clearup函数, 会在组件卸载前执行
    };

    // 你每点一次, 都会把上一次的销毁, 然后再创建一个新的; 
    // 因此它的清除函数会在下一次effect执行之前被执行; 
    // 所以会先弹一次当前的, 再弹一次新的; 
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  );
}
