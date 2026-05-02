import React, { useState } from "react";
import ChildComponent from "./childComponent";

import "./style.scss";

const ParentComponent = () => {
  const [sendData, setSendData] = useState("Initial Value from Parent");
  const [childData, setChildData] = useState("N/A");

  const passDataToChild = () => {
    setSendData(
      `New Value from parent component. ${Math.floor(Math.random() * 100)}`
    );
  };

  const handleChangeInParent = (payload) => {
    setChildData(payload);
  };

  return (
    <div className="parent-container">
      <h1>Parent Component</h1>
      <p>
        <strong>Note:</strong> Functional components are the smallest component
        which are being used only to display the item's data, they done handle
        the state of the component. Hence, the data that are being passed from
        parent to child and child to parent will not be reactive. Though we can
        pass the data only once, and that will take place when the component is
        loaded.
      </p>
      <button onClick={passDataToChild}>
        Click Here to Pass Data to Child
      </button>
      <p>
        Data coming from child component is: <strong>{childData}</strong>
      </p>

      <ChildComponent
        data={sendData}
        childButtonHandler={handleChangeInParent}
      />
    </div>
  );
};

export default ParentComponent;
