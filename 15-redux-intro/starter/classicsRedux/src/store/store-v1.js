import { combineReducers, createStore } from "redux";
import { accountReducer } from "../feature/accounts/accountSlice.jsx"
import { costomerReducer } from "../feature/customers/customerSlice.jsx"
import {thunk} from "redux-thunk";
import { applyMiddleware } from "redux";


const rootReducer = combineReducers({
    account: accountReducer,
    customer: costomerReducer
})
// 添加中间件; 
export const store = createStore(rootReducer, applyMiddleware(thunk));


