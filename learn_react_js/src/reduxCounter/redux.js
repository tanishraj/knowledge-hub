import { createStore } from "redux";

const INITIAL_STATE = {
  count: 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
