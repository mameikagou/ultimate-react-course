const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    // 这里的属性都是哪来的?都是在传入的时候添加的;
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}


// 封装事件
export const deposit = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};
export const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
export const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};
export const payLoan = (loan, loanPurpose) => {
  return {
    type: "account/payLoan",
    loan,
    loanPurpose,
  };
};
