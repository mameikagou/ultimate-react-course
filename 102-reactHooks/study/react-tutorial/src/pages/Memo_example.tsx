
import React, { useState,memo,useMemo } from 'react';
import { Button, message } from 'antd';

const Child = memo((props) => {
    // 一般情况下, 你的子组件, 你不希望它随着父组件的更新而更新, 你可以使用memo来进行优化;
    // 比如你按一下Button1, 来更新count1; 你会发现, 并没有触发这个Child组件的更新;
    message.info("Child render");
    return(
        <>
            <p>count2:{ props.count2 }</p>
        </>
    )
    
})

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

    return (
        <>
            <h1>count1:{ count1 }</h1>
            <Button onClick={()=>setCount1( count1 + 1 )}></Button>
            <Child count2 = { count2 } />
            <Button onClick={()=> setCount2( count2 + 1 )}>+</Button>
        </>
    )
}