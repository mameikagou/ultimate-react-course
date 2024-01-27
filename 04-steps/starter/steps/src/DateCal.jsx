import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs"


export default function DateCal(){

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [calTime, setCalTime] = useState(dayjs());
    // let calTime = dayjs(); // 这样写没有响应式; 
    useEffect(()=>{
        const getTime = ()=>{
             // format之后就是一个字符串; 
            // let now = dayjs().format("YYYY-MM-DD HH:mm:ss");
            // 麻烦的地方就在于, dayjs是个对象, format是在从对象里面取字符串; 
            // dayjs对象是不能修改的, 修改是在用新的去覆盖; 
            // 这里是在不断获取最新的dayjs对象, 去不断覆盖; 
            setCalTime((prevTime)=>{
                let newTime =  prevTime.add(step,'day'); // 恍然大悟, 这里加step的值可以完美实现需求; 
                return newTime;
            });
        }
        // 监听count, count每次变化时执行; 
        getTime();
        const IntervalID = setInterval(()=>{
            setTime(dayjs().format("HH:mm:ss"))
        },1000);
        return ()=>clearInterval(IntervalID);
    },[count]);


    return(
        <>
        <span>
            {/* {time} */}
        </span>
        <div>
            <button onClick={()=>setStep(step-1)}>-</button>
            <span>Step:{step}</span>
            <button onClick={()=>setStep(step+1)}>+</button>
        </div>
        <div>
            <button onClick={()=>setCount(count-step)}>-</button>
            <span>Count:{count}</span>
            <button onClick={()=>setCount(count+step)}>+</button>
        </div>
        {`${count} days from today is ${calTime.format("YYYY-MM-DD")} ${time}`}
        </>
    )
}