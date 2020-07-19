import React from "react";

import "./index.css";

function InputField({ placeholder }) {
  return (
    <div className="inputDiv">
      <input type="text" className="addressInput" placeholder={placeholder} />
      <img
        src={require("../../assets/target.svg")}
        alt="Pin"
        className="inputIcon"
      />
    </div>
  );
}

export default InputField;
