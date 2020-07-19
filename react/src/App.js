import React, { useState, useRef } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Footer from "./components/Footer";

export const markerIcon = new L.Icon({
  iconUrl: "https://i.ibb.co/NT67RLp/pin.png",
  iconSize: [115, 75],
  iconAnchor: [57, 37],
});

const App = () => {
  const [pinLocation, setPinLocation] = useState([
    -30.00913161930036,
    -51.17106020450593,
  ]);
  const [addPin, setAddPin] = useState(false);

  const mapRef = useRef();

  const markPosition = () => {
    if (mapRef.current.viewport.center) {
      alert(
        `Ocorrência em Latitude:${mapRef.current.viewport.center[0]}\n e \nLongitude:${mapRef.current.viewport.center[1]}`
      );
      setPinLocation(mapRef.current.viewport.center);
    } else {
      alert(
        `Ocorrência em Latitude:${mapRef.current.props.center[0]}\n e \nLongitude:${mapRef.current.props.center[1]}`
      );
    }
    setAddPin(true);
  };

  return (
    <div className="App">
      <Map ref={mapRef} center={pinLocation} zoom={17} className="mapContainer">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {addPin && <Marker position={pinLocation} icon={markerIcon}></Marker>}
      </Map>
      <img
        src={require("./assets/pin.png")}
        alt="Pin"
        className="pin"
        id="pin"
      />
      <div className="contentContainer">
        <div className="mainContent">
          <InputField placeholder={"Rua Olinda"} />
          <div className="text">
            <h2 className="title">Confirme o seu local</h2>
            <h4 className="description">
              Ajude o seu prestador a localiza-lo mais rapidamente, ajuste sua
              localização acima!
            </h4>
          </div>
          <Button onclick={markPosition} />
        </div>
        <Footer
          carLogo={require("./assets/vw.png")}
          licensePlate={"IXS-8269"}
          protocol={"1457845856894"}
        />
      </div>
    </div>
  );
};

export default App;
