import australiaTypes from "./australia.types";

const INITIAL_STATE = {
  currentScoreA: 0,
  wicketsRemainingA: 11,
  totalSixesA: 0,
  totalFoursA: 0,
  totalCustomRunsA: 0,
  wicketsFallenA: 0
};

const australiaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case australiaTypes.ASIX:
      return {
        ...state,
        currentScoreA: state.currentScoreA + 6,
        totalSixesA: state.totalSixesA + 1
      };

    case australiaTypes.AFOUR:
      return {
        ...state,
        currentScoreA: state.currentScoreA + 4,
        totalFoursA: state.totalFoursA + 1
      };

    case australiaTypes.AWICKET_FALL:
      return {
        ...state,
        wicketsFallenA: state.wicketsFallenA + 1,
        wicketsRemainingA: state.wicketsRemainingA - 1
      };

    case australiaTypes.ACUSTOM_RUNS:
      return {
        ...state,
        currentScoreA: state.currentScoreA + Number(action.payload),
        totalCustomRunsA: state.totalCustomRunsA + 1
      };

    default:
      return state;
  }
};

export default australiaReducer;
