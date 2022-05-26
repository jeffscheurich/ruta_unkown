import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./Map.css";
import { API } from "aws-amplify";
import DetailDisplay from "./MapElements";
import Navbar from "../Navbar";

const Map = () => {
  const [pins, setPins] = React.useState([]);
  const [currentPin, setCurrentPin] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [draggable, setDraggable] = React.useState(false);

  useEffect(() => {
    API.get("pinsapi", "/pins/Id")
      .then(pinsRes => {
        setPins([...pinsRes]);
      });
  },[]);

  const fetchInfo = (e) => {
    const findPin = (array, id) => {
      return array.find((element) => {
        return element.Id === id;
      });
    };
    const selectedPinId = e.target.options.id;
    const selectedPin = findPin(pins, selectedPinId);
    const pinCopy = {
      ...selectedPin
    };
    setCurrentPin(pinCopy);
    setOpen(true);
  };

  const conditionalClose = (open) => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <>
      <Navbar />
      <MapContainer
        center={[0, 0]}
        zoom={2.5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map(pin => (
          <Marker
            key={pin.Id}
            autoPan={"false"}
            id = {pin.Id}
            position={[pin.Location.Latitude, pin.Location.Longitude]}
            eventHandlers={{
              click: (e) => {
                fetchInfo(e);
              },
            }}
          >
          </Marker>
        ))}
      </MapContainer>
      <DetailDisplay
        open={open}
        currentPin={currentPin}
        onClick={() => {conditionalClose(open);}}
        draggable={draggable}
      >
      </DetailDisplay>
    </>
  );
};

export default Map;