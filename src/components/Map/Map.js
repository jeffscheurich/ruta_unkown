import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './Map.css';
import Amplify, {API} from 'aws-amplify'

const Map = () => {
  const [pins, setPins] = React.useState([]);
  // const [position, setPosition] = React.useState([10,10]);
  // setPosition([0, 0]);
  useEffect(() => {
    API.get('pinsapi', '/pins/Id')
    .then(pinsRes => {
      console.log(pinsRes)
      // const pins = pinsRes;
      setPins([...pinsRes]);
    })
  },[]);
  const addPin = () => {
    console.log("pin")
    const randomLat = Math.random() * 100;
    const randomLong = Math.random() * 100;
    const randomId = Math.random() * 10000
    const pin = {
      Id: randomId,
      Location: {
        Latitude: randomLat,
        Longitude: randomLong
      },
    }
    // console.log(pins);
    const newPins = pins.slice();
    // console.log(newPins);
    const fullPins = newPins.concat(pin)
    setPins(fullPins)
    // setPins(...pins, pin);
  }
  const fetchInfo = (e) => {
    console.log(e);
  }
  
  return (
    <>
      <MapContainer center={[0, 0]} zoom={2.5}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {pins.map(pin => (
            <Marker
              key={pin.Id}
              // we use attribution to pass along our pinId
              attribution = {pin.Id}
              position={[pin.Location.Latitude, pin.Location.Longitude]}
              eventHandlers={{
                click: (e) => {
                  fetchInfo(e);
                },
              }}
            >
            </Marker>
          ))}
          {/* <Marker 
            position= {position} 
            eventHandlers={{
              click: () => {
                random();
              },
            }}
          >
          </Marker> */}

      </MapContainer>
    </>
  )
}

export default Map