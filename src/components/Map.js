import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./styles/Map.css";
import { API } from "aws-amplify";
import DetailDisplay from "./DetailDisplay";
import Navbar from "./Navbar";
import Draggable from "./Draggable";
import NewPinDisplay from "./NewPinDisplay";

const App = () => {
  const [pins, setPins] = React.useState([]);
  const [currentPin, setCurrentPin] = React.useState({});
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [draggable, setDraggable] = React.useState(false);
  const [map, setMap] = React.useState(null);
  const [newPin, setNewPin] = React.useState({
    Id: "",
    Comments: [],
    Description: "",
    Location: {
      lat: 0,
      lng: 0
    },
    Title: "",
  });
  const [newPinOpen, setNewPinOpen] = React.useState(false);

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
    setDetailOpen(true);
  };

  const conditionalClose = (open) => {
    if (open) {
      setDetailOpen(false);
    }
  };

  const getCurrentCenter = (map) => {
    const newPinCopy = newPin;
    newPinCopy.Location = map.getCenter();
    console.log(`parent newPinCopy ${newPinCopy.Location}`);
    setNewPin(newPinCopy);
  };

  return (
    <>
      <Navbar 
        draggable={draggable}
        // setDraggable = {() => {setDraggablePin(draggable);}}
        setDraggable={setDraggable}
        newPinOpen={newPinOpen}
        // setNewPinOpen={() => {setNewPinOpen(newPinOpen);}}
        setNewPinOpen={setNewPinOpen}
      />
      <MapContainer
        center={[0, 0]}
        zoom={2.5}
        ref={setMap}
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
        { 
          draggable 
            ? 
            <>
              <Draggable
                draggable={draggable} 
                setCenterPos={() => { getCurrentCenter(map); }}
                setNewPin={setNewPin}
                newPin={newPin}
              />
            </>
            :
            null
        }
      </MapContainer>
      <DetailDisplay
        open={detailOpen}
        currentPin={currentPin}
        onClick={() => {conditionalClose(open);}}
      />
      {
        newPinOpen && draggable
          ?
          <NewPinDisplay 
            open={newPinOpen}
            setNewPinOpen={() => {setNewPinOpen(!newPinOpen);}}
          />
          :
          null
      }
      
      
    </>
  );
};

export default App;