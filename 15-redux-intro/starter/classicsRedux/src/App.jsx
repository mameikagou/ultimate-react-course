import { useState } from 'react'

import AccountOperations from './feature/accounts/AccountOperations'
import Customer from './feature/customers/Customer'
import CreateCustomer from './feature/customers/CreateCustomer'
// import {BalanceDisplay} from './feature/accounts/BalanceDisplay'
import BalanceDisplay from './feature/accounts/BalanceDisplay'
import './App.css'
import { store } from './store/store-v1'
import { createCustomer } from './feature/customers/customerSlice'
import { deposit } from './feature/accounts/accountSlice'

function App() {
  store.dispatch(deposit(500));
  store.dispatch(createCustomer('Alice', '1234567890'));
  console.log(store.getState())
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App
