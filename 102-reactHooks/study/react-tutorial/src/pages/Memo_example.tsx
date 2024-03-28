import React, { useState, memo, useMemo, useCallback } from "react";
import { Button, message } from "antd";

// useMemo和memo的区别
// useMemo的两个参数, 一个是计算函数(calc) 一个是监听对象(dependencies);
// memo lets you skip re-rendering a component when its props are unchanged.
// const MemoizedComponent = memo(SomeComponent, arePropsEqual?)

const nums = Array(100)
  .fill(0)
  .map((_, index) => index);

//   只要你不希望它随着父组件更新, 就加上memo, memo就是一个缓存的作用;
const MemoComponent = memo(({ nums }: { nums: number[] }) => {
  const numsFilter = (nums: number[]) => nums.filter((num) => num % 2 === 0);

  const tryMemo = useMemo(() => numsFilter(nums), [nums]);
    message.info("MemoComponent render");
  return (
    <>
      <p>tryMemo:{tryMemo.toString().split("")}</p>
    </>
  );
});

const Child = memo(({ count2 }: { count2: number }) => {
  // 一般情况下, 你的子组件, 你不希望它随着父组件的更新而更新, 你可以使用memo来进行优化;
  // 比如你按一下Button1, 来更新count1; 你会发现, 并没有触发这个Child组件的更新;
  message.info("Child render");
  console
  return (
    <>
      <p>count2:{count2}</p>
    </>
  );
});

/**
 * memo就是类似于computed, 你可以把计算的结果缓存起来, 以便下次使用;从而优化性能;
 * 但是memo只能用于函数组件, 不能用于类组件; 使用类赋值的时候, 会报错;
 *
 * 当一个组件变化的时候, 相关视图是必须更新的; 也就是这个页面会全部更新;
 * 你用memo包一下的话, 要是不关它的事, 就不会更新;
 *
 * useMemo就是再加一层, 监听的数据如果不变, 那么其他的也不变;
 *
 */

export default function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

// memo是没法直接缓存函数的, 每次父组件更新都要重新计算;
// 参数1: 你要缓存的函数, 参数2: 你要监听的数据;
// 它与useMemo的区别是, useMemo是缓存数据,userCallback是缓存函数;
  const newSetCount2 = useCallback(() => {
    setCount2(count2 + 1);
  },[])

//   这里的逻辑是, 你点击Button1, 会触发MemoComponent的更新, 但是不会触发Child的更新;
  return (
    <>
      <MemoComponent nums={nums} />
      <h1>count1:{count1}</h1>
      <Button onClick={() => setCount1(count1 + 1)}>+</Button>
      <Child count2={count2} />
      <Button onClick={newSetCount2}>+</Button>
    </>
  );
}
