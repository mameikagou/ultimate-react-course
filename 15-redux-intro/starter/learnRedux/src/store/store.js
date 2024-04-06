import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt:""
}

function accountReducer(state = initialStateAccount, action) {
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

const costomerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        customer: action.payload,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
       fullName: action.payload,
      };

    default:
      return state;
  }
};


const rootReducer = combineReducers({
    account: accountReducer,
    customer: costomerReducer
})
export const store = createStore(rootReducer);

// store.dispatch({type: "account/deposit", payload: 500});

// console.log(store.getState());

// store.dispatch({type: "account/requestLoan", payload:{amount:100, purpose:"Buy a car"},});

// console.log(store.getState());

// 封装事件
const deposit = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};
const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
};
const payLoan = (loan, loanPurpose) => {
  return {
    type: "account/payLoan",
    loan,
    loanPurpose,
  };
};

store.dispatch(deposit(500));

const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toString() },
  };
};

const updateName = (fullname) => {
    return {
        type: "customer/updateName",
        payload: fullname
    }
};

store.dispatch(createCustomer("John Doe", "1234567890"));
console.log(store.getState());

store.dispatch(deposit(500));
console.log(store.getState());