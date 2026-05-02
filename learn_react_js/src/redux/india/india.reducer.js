import indiaTypes from "./india.types";

const INITIAL_STATE = {
  currentScoreI: 0,
  wicketsRemainingI: 11,
  totalSixesI: 0,
  totalFoursI: 0,
  totalCustomRunsI: 0,
  wicketsFallenI: 0
};

const indiaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case indiaTypes.ISIX:
      return {
        ...state,
        currentScoreI: state.currentScoreI + 6,
        totalSixesI: state.totalSixesI + 1
      };

    case indiaTypes.IFOUR:
      return {
        ...state,
        currentScoreI: state.currentScoreI + 4,
        totalFoursI: state.totalFoursI + 1
      };

    case indiaTypes.IWICKET_FALL:
      return {
        ...state,
        wicketsFallenI: state.wicketsFallenI + 1,
        wicketsRemainingI: state.wicketsRemainingI - 1
      };

    case indiaTypes.ICUSTOM_RUNS:
      return {
        ...state,
        currentScoreI: state.currentScoreI + Number(action.payload),
        totalCustomRunsI: state.totalCustomRunsI + 1
      };

    default:
      return state;
  }
};

export default indiaReducer;
