import React from "react";

class LifeCycle extends React.Component {
  // 1 Get Intial State
  constructor() {
    super();

    // 2 Set Initial State
    this.state = {
      title: "React App"
    };
  }

  //3 Before Get Created
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps will be called.");
  }

  updateState = () => {
    this.setState({ title: "Updated Title" });
  };

  // 4
  render() {
    return (
      <div>
        <h1>React Life Cycle</h1>
        <p>There are 3 different phases for a component.</p>
        <ul>
          <li>
            <strong>Mounting</strong>
            <ol>
              <li>constructor</li>
              <li>getDerivedStateFromProps</li>
              <li>render</li>
              <li>componentDidMount</li>
            </ol>
          </li>
          <li>
            <strong>Updating</strong>
            <ol>
              <li>getDerivedStateFromProps</li>
              <li>shouldComponentUpdate</li>
              <li>render</li>
              <li>getSnapshotBeforeUpdate</li>
              <li>componentDidUpdate</li>
            </ol>
          </li>
          <li>
            <strong>Unmounting</strong>
            <ol>
              <li>ComponentWillUnmount</li>
            </ol>
          </li>
        </ul>

        <hr />
        <button onClick={this.updateState}>
          Call Should Component Update Hook
        </button>
        <p>Title is: {this.state.title}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount will be called.");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate will be called.");
    return false;
    // return true;
  }
}

export default LifeCycle;
