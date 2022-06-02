/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { Marker, Tooltip } from "react-leaflet";
import styled from "styled-components";

export const StyledMarker = styled(Marker)`
    display: none;
`;

const Draggable = (props) => {
  const markerRef = useRef();
  const updatePosition = () => {
    const marker = markerRef.current;
    const newPinCopy = props.newPin;
    console.log(marker._latlng);
    newPinCopy.Location.Latitude = marker._latlng.lat;
    newPinCopy.Location.Longitude = marker._latlng.lng;
    console.log(newPinCopy);
    props.setNewPin(newPinCopy);
  };

  return (
    <>
      {props.newPin
        ?
        <StyledMarker   
          position={[props.newPin.Location.Latitude, props.newPin.Location.Longitude]}
          draggable={props.draggable}
          ref={markerRef}
          eventHandlers={{
            dragend: () => {updatePosition();},
          }}
        >
          <Tooltip direction="bottom" offset={[-15, 30]} opacity={1} permanent>
            Drag me!
          </Tooltip>
        </StyledMarker>
        :
        null
      }
    </>
  );
};

export default Draggable;