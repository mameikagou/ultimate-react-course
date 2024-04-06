
// 这些都不再需要了; 
// import { combineReducers, applyMiddleware} from "redux";
// import {thunk} from "redux-thunk";


import { accountReducer } from "../feature/accounts/accountSlice.jsx"
import { customerReducer } from "../feature/customers/customerSlice.jsx"


import {configureStore} from "@reduxjs/toolkit";


// 这些也不需要了; 
// const rootReducer = combineReducers({
//     account: accountReducer,
//     customer: costomerReducer
// })
// // 添加中间件; 
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer:{
        account: accountReducer,
        customer: customerReducer
    },
});

