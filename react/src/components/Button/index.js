import React from "react";

import "./index.css";

const Button = ({ onclick }) => {
  return (
    <button onClick={onclick} className="btn">
      Confirmar o local da ocorrência
      <img
        src={require("../../assets/rightArrow.png")}
        alt="Arrow"
        className="arrowIcon"
      />
    </button>
  );
};

export default Button;
