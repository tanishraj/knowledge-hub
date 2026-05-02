import React from "react";
import "./styles.scss";

import Links from "./routes/links";
import Routes from "./routes/routes";

export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Links />
      </div>
      <div className="main-content">
        <Routes />
      </div>
    </div>
  );
}
