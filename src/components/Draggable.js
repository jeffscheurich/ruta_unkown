/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { Marker, Tooltip } from "react-leaflet";
import styled from "styled-components";

export const StyledMarker = styled(Marker)`
    display: none;
`;

const Draggable = (props) => {
  useEffect((map) => {
    props.setCenterPos(map);
    // console.log(`child use effect: ${[props.newPinPosition.lat, props.newPinPosition.lng]}`);
  }, []);
  const markerRef = useRef();


  const updatePosition = () => {
    const marker = markerRef.current;
    const newPinCopy = props.newPin;
    newPinCopy.Location = marker._latlng;
    props.setNewPin(newPinCopy);
  };

  return (
    <>
      {props.newPin
        ?
        <StyledMarker   
          position={props.newPin.Location}
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