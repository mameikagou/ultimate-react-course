
// 设置多个store, 分片的思维;
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  balance:0,
  loan:0,
  loanPurpose:"",
  isLoading: false
}

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers:{
    deposit(state, action){
      state.balance += action.payload;
    },
    withdraw(state, action){
      state.balance -= action.payload;
    },
    requestLoan(state, action){
      if(state.loan>0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan(state){
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    }
  }
})
console.log(accountSlice);

// 注意这里是actions
export const {deposit, withdraw, requestLoan, payLoan} = accountSlice.actions; 
export const accountReducer = accountSlice.reducer ;

// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
//   isLoading: false,
// };

// export function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     // 这里的属性都是哪来的?都是在传入的时候添加的;
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload, };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) {
//         return state;
//       }
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
    
//     default:
//       return state;
//   }
// }

// // 封装事件
// export const deposit = (amount, currency) => {
//   // 如果是美元, 就直接传; 不需要转化;  
//   if(currency==="USD"){
//     return {
//       type: "account/deposit",
//       payload: amount,
//     }; 
//   }

//   return async (dispatch, getState)=>{
//     dispatch({ 
//       type: "account/convertingCurrency",
//     });
 
//     const res = await fetch();
//     const data = await res.json();
//     // 这里是伪代码哈, 不知道源数据; 
//     const convertedAmount = data.rates[currency] * amount;

//     dispatch({
//       type: "account/deposit",
//       payload: convertedAmount,
//     });

//   }
// }; 
// export const withdraw = (amount) => {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// };
// export const requestLoan = (amount, purpose) => {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// };
// export const payLoan = (loan, loanPurpose) => {
//   return {
//     type: "account/payLoan",
//     loan,
//     loanPurpose,
//   };
// };
