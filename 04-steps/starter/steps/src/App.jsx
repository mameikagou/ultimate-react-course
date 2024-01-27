import { useState } from "react";
import DateCal from "./DateCal";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // For data that should not trigger
  //  component re-renders, 
  // don't use state;
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const len = messages.length;
  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1);
  };
  const handleNext = () => {
    if (step < len) setStep((step) => step + 1);// 记得用回调的方法
  };

  // const calClassName = 
  return (
    <>
    <DateCal />
      <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        // 记住, 括号里面的东西, 一定有一个父组件;  
        <>
          <div className="steps">
            <div className="numbers">
              {/* 设置一个激活了的属性, 然后设置应用它的逻辑即可;  */}
              {messages.map((_, key) => {
                return (
                  <div key={key} className={`${step >= key + 1 ? "active" : ""}`}>
                    {key + 1}
                  </div>
                );
              })}
              {/* 先实现不能动的, 在一步一步实现下面的;  */}
              {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active" : ""}`}>3</div> */}
            </div>
          </div>
          <p className="message">
            Step{step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            {/* onMouseenter */}
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950f2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
