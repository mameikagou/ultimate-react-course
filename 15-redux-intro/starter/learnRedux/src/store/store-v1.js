import { combineReducers, createStore } from "redux";
import { accountReducer } from "../feature/accounts/accountSlice.jsx"
import { costomerReducer } from "../feature/customers/customerSlice.jsx"
const rootReducer = combineReducers({
    account: accountReducer,
    customer: costomerReducer
})
export const store = createStore(rootReducer);


