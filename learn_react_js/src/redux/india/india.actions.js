import indiaTypes from "./india.types";

const indiaActions = {
  hitASix: () => {
    return {
      type: indiaTypes.ISIX
    };
  },

  hitAFour: () => {
    return {
      type: indiaTypes.IFOUR
    };
  },

  wicketFall: () => {
    return {
      type: indiaTypes.IWICKET_FALL
    };
  },

  customRuns: (payload) => {
    return {
      type: indiaTypes.ICUSTOM_RUNS,
      payload: payload
    };
  }
};

export default indiaActions;
