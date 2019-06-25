import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import Content from "./Content";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Popup modal trigger={<button>Show Modal</button>}>
        {close => <Content close={close} />}
      </Popup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
