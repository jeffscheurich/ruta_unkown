import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useSwr from "swr";
import './Map.css';

const fetcher = (...args) => fetch(...args).then(response => response.json());
const url = "/";
const Map = () => {
  return (
    <MapContainer center={[0, 0]} zoom={2.5}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
  )
}

export default Map