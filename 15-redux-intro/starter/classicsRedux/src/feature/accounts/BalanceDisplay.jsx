
import { connect } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";



const formatCurrency=(value)=>{
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = ({balance} ) => {
  return <div className="balance">{formatCurrency(balance)}</div>;
}


// 就是把state里的数据传递给组件, 从里面取数据啊就是; 
const mapStateToProps = (state) => {
  return {
    // 这里是在root里面定义的account, 所以这里是state.account.balance
    // 刚刚这里写成了accounts, 但是在root里面是account
    balance: state.account.balance,
  };
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deposit: (amount) => dispatch(deposit(amount)),
//     withdraw: (amount) => dispatch(withdraw(amount)),
//     requestLoan: (amount) => dispatch(requestLoan(amount)),
//     payLoan: () => dispatch(payLoan()),
//   };
// }

// connect(mapStateToProps, mapDispatchToProps)(BalanceDisplay());

// const newBalanceDisplay=connect(mapStateToProps)(BalanceDisplay);

// export {newBalanceDisplay as BalanceDisplay}

export default connect(mapStateToProps)(BalanceDisplay);