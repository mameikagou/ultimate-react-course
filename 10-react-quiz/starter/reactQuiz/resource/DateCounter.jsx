import { useState,useReducer } from "react";

const initialState = {count:0, step:1};

const reducer=(state, action)=>{
  switch(action.type){
    case 'inc':
      return {...state, count: state.count + action.value};
    case 'dec':
      return {...state, count: state.count - action.value};
    case 'secCount':
      return {...state, count: action.value};
    case 'setStep':
      return {...state, step: action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer,initialState);
  const {count, step} = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({type:'dec', value:step});
  };
  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({type:'inc', value:step});
  };

  const defineCount = (e) => {
    dispatch({type:'setCount', value:Number(e.target.value)});
  };

  const defineStep = (e) => {
    dispatch({type:'setStep', value:Number(e.target.value)});
  };

  const reset = function () {
    dispatch({type:'reset'});
  };

  return (
    <>
      <div className="counter">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={defineStep}
          />
          <span>{step}</span>
        </div>

        <div>
          <button onClick={dec}>-</button>
          <input value={count} onChange={defineCount} />
          <button onClick={inc}>+</button>
        </div>

        <p>{date.toDateString()}</p>

        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default DateCounter;
