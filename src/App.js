import React from "react";
import "./style.css";

export default function App() {
  let name = "red"
  return (
    <div>
      <h1 className={`${name} blue`}>Hello StackBlitz!</h1>
      <p>Start this editing to see some magic happen :)</p>
    </div>
  );
}
