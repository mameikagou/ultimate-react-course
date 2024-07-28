import { useEffect, useRef, useState,useImperativeHandle } from "react";
import React from "react";
// 下划线的props表示不调用; 
const Children:React.ForwardRefRenderFunction<HTMLInputElement> = (_props,ref)=>{
    return <div>
        <input ref={ref}></input>
    </div>
}

interface RefProps {
    aaa: () =>void
}

const CustomChildren: React.ForwardRefRenderFunction<RefProps> = (_props,ref)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    // 就是连通两个ref的; 
    useImperativeHandle(ref,()=>{
        return {
            aaa(){
                //  inputRef.current?.focus();
                inputRef.current && (inputRef.current.value = '123')
            }
        }
    },[inputRef])
    return <div>
        <input ref={inputRef}></input>
    </div>
}

// 通关React.forwardRef包一层, 将子组件的ref传递到父组件; 
// 这样做的结果是直接暴露标签到父组件; 
const WrapChild = React.forwardRef(Children);
const WrapCustomChildren = React.forwardRef(CustomChildren);

export const UseRefDemo = () => {
    // useRef 的类型参数是保存的内容的类型。就类似于vue中的value; 
    // 
    const inputRef = useRef<HTMLInputElement>(null);
    const customRef = useRef<RefProps>(null)
    const numRef = useRef<number>(0);
    const [,forceRender] = useState(0);
    useEffect(()=>{
        inputRef.current?.focus(); //监听划到了这个页面; 
        customRef.current?.aaa();
    })

    return (
        <div>
            {/* <input ref={inputRef} type="text" /> */}
            <button onClick={()=>{
                numRef.current++; // 不触发重新渲染, 一般用来存不用于渲染的内容; 
                forceRender(numRef.current);
            }}>useRef不直接触发重新渲染{numRef.current}</button>
            <WrapChild ref={inputRef} />
            <WrapCustomChildren ref={customRef} />
        </div>
    );
};