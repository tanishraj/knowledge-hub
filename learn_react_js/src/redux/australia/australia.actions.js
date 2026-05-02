import australiaTypes from "./australia.types";

const australiaActions = {
  hitASix: () => {
    debugger;
    return {
      type: australiaTypes.ASIX
    };
  },

  hitAFour: () => {
    return {
      type: australiaTypes.AFOUR
    };
  },

  wicketFall: () => {
    return {
      type: australiaTypes.AWICKET_FALL
    };
  },

  customRuns: (payload) => {
    return {
      type: australiaTypes.ACUSTOM_RUNS,
      payload: payload
    };
  }
};

export default australiaActions;
