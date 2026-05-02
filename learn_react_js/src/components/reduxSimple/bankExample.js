import React, { useState } from "react";
import { connect } from "react-redux";

const BankStatement = (props) => {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h1>
        Bank Statement: <span>A Redux Example</span>
      </h1>

      <ul>
        <li>Current Balance: {props.currentBalance}</li>
        <li>Last Deposited Amount: {props.lastDeposited}</li>
        <li>Last Withdrawn Amount: {props.lastWithdrawn}</li>
      </ul>

      <br />
      <hr />
      <br />

      <input
        type="text"
        placeholder="enter the amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => props.checkLastDeposited(Number(amount))}>
        Deposit Amount
      </button>
      <button onClick={() => props.checkLastWithdrawn(Number(amount))}>
        Withdraw Amount
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentBalance: state.currentBalance,
    lastDeposited: state.lastDeposited,
    lastWithdrawn: state.lastWithdrawn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLastDeposited: (amount) => {
      dispatch({ type: "DEPOSIT_AMOUNT", payload: amount });
    },
    checkLastWithdrawn: (amount) => {
      dispatch({ type: "WITHDRAW_AMOUNT", payload: amount });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankStatement);
