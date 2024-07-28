// import { JSX } from "react/jsx-runtime";
import { useWindowSize } from "../Hooks/useWindowSize"

interface WindowSize {
    width: number;
    height: number;
  }
// 这也是高阶组件, children的模式; 
export const withWindowSize=<P extends object>(Comp:React.ComponentType<P & {windowSize:WindowSize}>)=>{
    return (props: P)=>{
        const windowSize = useWindowSize();
        return(
            <Comp {...props} windowSize={windowSize} />
        )
    }
}

// 使用方法就是, 使用这个函数来包装组件; 
// 这样就能通过useWindowSize来统一管理尺寸; 

// 以下是一个例子, 一般不写在这里: 
const myComp = (props: { windowSize: WindowSize; }) =>{
    const{windowSize}=props;
    return(
        <div>
            Window width: {windowSize.width}, Window height: {windowSize.height}
        </div>
    )
}
// 这样使用高阶函数就能避免层层props传递; 
export const MyCompWithWindowSize = withWindowSize(myComp);
