import { useState, Reducer, useReducer } from "react";
import { produce } from "immer";
interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  type: "add";
  num: number;
}

// React 设计的重要原则, 不可变性; 用更对象替代旧对象, 而不是更改它;
//
// 可预测性, 浅比较性能强, 便于调试;
// pnpm install --save immer
// 复杂对象修改, 使用immutable相关的库
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return produce(state, (state) => {
        state.a.c.e += action.num;
      });
    //   return {
    //     ...state,
    //     a: {
    //       ...state.a,
    //       c: {
    //         ...state.a.c,
    //         e: state.a.c.e + action.num,
    //       },
    //     },
    //   };
  }
}

export const ReducerDemo = () => {
  const initNum = {
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  };
  const [num, setNum] = useState<Data>(initNum);
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "init",
    () => {
      return {
        a: {
          c: {
            e: 0,
            f: 0,
          },
          d: 0,
        },
        b: 0,
      };
    }
  );
  return (
    <>
      <button onClick={() => dispatch({ type: "add", num: 2 })}>加2</button>
      <div>{JSON.stringify(res)}</div>
      <button
        onClick={() => {
          setNum(
            produce(num, (num) => {
              num.a.c.e += 1;
            })
          );
        }}
      >加一</button>
      <div>{JSON.stringify(num)}</div>
    </>
  );
};
