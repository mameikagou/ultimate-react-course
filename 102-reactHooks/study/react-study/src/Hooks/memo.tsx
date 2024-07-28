

import { useEffect, memo, useState, useCallback, useMemo } from "react";
// import React from "react";

// memo 是防止 props 没变时的重新渲染，
// useMemo 和 useCallback 是防止 props 的不必要变化. 

export const MemoDemo = () =>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setCount(count=>count+=1)
        }, 500)
    },[]);
    // 只有当deps变的时候, 才会跟着变; 保存的是函数; 
    const bobCallback = useCallback(()=>{},[]);
    // useMemo相对于其, 保存的是值; 有点类似于computed; 
    const count2 = useMemo(()=>{
        return count * 10;
    },[count])
    return<div>
        <MemoBob count={count2} callback={bobCallback}></MemoBob>
        <button
         bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white"
         font="mono light" 
         p="y-2 x-4" 
         border="2 rounded blue-200" 
        >
          Button
        </button>
    </div>
}

interface Bob {
    count: number;
    callback: ()=>void
    className?: string;
}

// 用memo包裹后, 只有props更新了, 才会触发重新渲染; 也就是, 每两秒变一次; 
const MemoBob = memo((props: Bob) => {
    console.log('MemoBob render');
    return <div className="font-bold text-2xl mb-2 bg-[#b2a8bb]">{props.count}</div>;
});