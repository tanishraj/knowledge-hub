import { createStore } from "redux";

const INITIAL_STATE = {
  currentBalance: 10000,
  lastWithdrawn: 0,
  lastDeposited: 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
  debugger;
  switch (action.type) {
    case "DEPOSIT_AMOUNT":
      return {
        ...state,
        currentBalance: state.currentBalance + action.payload,
        lastDeposited: action.payload
      };

    case "WITHDRAW_AMOUNT":
      return {
        ...state,
        currentBalance: state.currentBalance - action.payload,
        lastWithdrawn: action.payload
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
