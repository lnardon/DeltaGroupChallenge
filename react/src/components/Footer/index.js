import React from "react";

import "./index.css";

function Footer({ carLogo, licensePlate, protocol }) {
  return (
    <div className="footer">
      <div className="carInfoContainer">
        <img src={carLogo} alt=" Car Brand" className="carLogo" />
        <div className="carInfoText">
          <h3 className="label">Placa</h3>
          <h2 className="licencePlate">{licensePlate}</h2>
        </div>
      </div>
      <div className="protocolInfoContainer">
        <h3 className="label">Protocolo</h3>
        <div className="protocolText">
          <h4 className="protocolNumber">{protocol}</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
