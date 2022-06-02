import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./styles/Map.css";
import { API } from "aws-amplify";
import DetailDisplay from "./DetailDisplay";
import Navbar from "./Navbar";
import Draggable from "./Draggable";
import NewPinDisplay from "./NewPinDisplay";
import NewCommentDisplay from "./NewComment";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [pins, setPins] = React.useState([]);
  const [currentPin, setCurrentPin] = React.useState({});
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [draggable, setDraggable] = React.useState(false);
  const [map, setMap] = React.useState(null);
  const [newPin, setNewPin] = React.useState({
    Id: "",
    Comments: [],
    Description: "Enter Description",
    Location: {
      Latitude: 0,
      Longitude: 0
    },
    Title: "Enter Title",
  });
  const [newPinOpen, setNewPinOpen] = React.useState(false);
  const [newCommentOpen, setNewCommentOpen] = React.useState(false);
  const [newComment, setNewComment] = React.useState("");

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

  const getCurrentCenter = (map) => {
    const newPinCopy = newPin;
    newPinCopy.Location.Latitude = map.getCenter().lat;
    newPinCopy.Location.Longitude = map.getCenter().lng;
    setNewPin(newPinCopy);
  };

  const postNewPin = (newPin, pins) => {
    const uuid = uuidv4();
    newPin.Id = uuid;
    const pinsCopy = pins.concat(newPin);
    setPins(pinsCopy);
    API.post("pinsapi", "/pins", {
      body: newPin
    }).then(res => {
      console.log(res);
      if (res.success){
        console.log("successful now lets add");
      }
    });
  };

  const putNewComment = (selectedPin) => {
    API.put("pinsapi", "/pins", {
      body: selectedPin
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <>
      <Navbar 
        draggable={draggable}
        setDraggable={setDraggable}
        newPinOpen={newPinOpen}
        setNewPinOpen={setNewPinOpen}
        newPin={newPin}
        setCenterPos={() => {getCurrentCenter(map);}}

      />
      <MapContainer
        center={[50, 0]}
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
        setDetailOpen={setDetailOpen}
        setNewCommentOpen={setNewCommentOpen}
        newCommentOpen={newCommentOpen}
      />
      {
        newPinOpen && draggable
          ?
          <NewPinDisplay 
            open={newPinOpen}
            newPin={newPin}
            pins={pins}
            setNewPinOpen={setNewPinOpen}
            setNewPin={setNewPin}
            postNewPin={postNewPin}
            setDraggable={setDraggable}
          />
          :
          null
      }
      {
        newCommentOpen
          ?
          <NewCommentDisplay 
            currentPin={currentPin}
            setNewCommentOpen={setNewCommentOpen}
            newCommentOpen={newCommentOpen}
            newComment={newComment}
            setNewComment={setNewComment}
            putNewComment={putNewComment}
          />
          :
          null
      }
      
    </>
  );
};

export default App;