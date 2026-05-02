import React, { useState } from "react";
import { connect } from "react-redux";
import "./cricketTeam.scss";

const IndiaTeam = (props) => {
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
      <h2>India Team Score Card:</h2>
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
    totalScore: state.indiaReducer.currentScoreI,
    totalSixes: state.indiaReducer.totalSixesI,
    totalFours: state.indiaReducer.totalFoursI,
    wicketsFallen: state.indiaReducer.wicketsFallenI,
    wicketsRemaining: state.indiaReducer.wicketsRemainingI,
    totalCustomRuns: state.indiaReducer.totalCustomRunsI
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hitASix: () => {
      dispatch({ type: "ISIX" });
    },
    hitAFour: () => {
      dispatch({ type: "IFOUR" });
    },
    takeWicket: () => {
      dispatch({ type: "IWICKET_FALL" });
    },
    takeRuns: (runs) => {
      dispatch({ type: "ICUSTOM_RUNS", payload: runs });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndiaTeam);
