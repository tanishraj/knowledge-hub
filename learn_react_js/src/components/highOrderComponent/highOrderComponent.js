import React from "react";

const myHOC = (WrapperComponent) => {
  class Bonus extends React.Component {
    constructor() {
      super();
      this.state = { bonus: 100 };
    }

    getCompanyName = () => {
      alert("Hi, I am the one who is getting called from HOC.");
    };

    render() {
      return (
        <WrapperComponent
          bonus={this.state.bonus}
          getCompanyName={this.getCompanyName}
        />
      );
    }
  }
  return Bonus;
};

export default myHOC;
