import React, { useState } from "react";
import { connect } from "react-redux";
import "./cricketTeam.scss";

const AustraliaTeam = (props) => {
  const [customRuns, setCustomRuns] = useState(0);
  const {
    totalScore,
    totalSixes,
    totalFours,
    wicketsFallen,
    wicketsRemaining,
    totalCustomRuns
  } = {
    ...props
  };
  return (
    <>
      <h2>Australia Team Score Card:</h2>
      <ul>
        <li>
          <strong>Total Score: </strong> {totalScore}
        </li>
        <li>
          <strong>Total Sixes: </strong> {totalSixes}
        </li>
        <li>
          <strong>Total Fours: </strong> {totalFours}
        </li>
        <li>
          <strong>Wickets Remaining: </strong>
          {wicketsRemaining}
        </li>
        <li>
          <strong>Wickets Fallen: </strong> {wicketsFallen}
        </li>
        <li>
          <strong>Total Custom Runs: </strong> {totalCustomRuns}
        </li>
      </ul>

      <div className="button-container">
        <ul>
          <li>
            <button onClick={props.hitASix}>Hit A Six</button>
          </li>
          <li>
            <button onClick={props.hitAFour}>Hit A Four</button>
          </li>
          <li>
            <button onClick={props.takeWicket}>Take A Wicket</button>
          </li>
          <li>
            <input
              type="text"
              placeholder="custom runs"
              onChange={(e) => setCustomRuns(e.target.value)}
            />
            <button onClick={() => props.takeRuns(customRuns)}>
              Take Runs
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalScore: state.australiaReducer.currentScoreA,
    totalSixes: state.australiaReducer.totalSixesA,
    totalFours: state.australiaReducer.totalFoursA,
    wicketsFallen: state.australiaReducer.wicketsFallenA,
    wicketsRemaining: state.australiaReducer.wicketsRemainingA,
    totalCustomRuns: state.australiaReducer.totalCustomRunsA
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hitASix: () => {
      dispatch({ type: "ASIX" });
    },
    hitAFour: () => {
      dispatch({ type: "AFOUR" });
    },
    takeWicket: () => {
      dispatch({ type: "AWICKET_FALL" });
    },
    takeRuns: (runs) => {
      dispatch({ type: "ACUSTOM_RUNS", payload: runs });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AustraliaTeam);
