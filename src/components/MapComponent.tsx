import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const MapComponent = () => {

  return (
    <MapContainer center={[-37.808, 144.870]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-37.808, 144.870]}>
            <Popup>
                <a href="https://www.google.com/maps/place/80+Roberts+St,+West+Footscray+VIC+3012/@-37.8077499,144.8674958,16z/data=!3m1!4b1!4m6!3m5!1s0x6ad660ada1f91335:0xfa329a3253e27672!8m2!3d-37.8077542!4d144.8700707!16s%2Fg%2F11c1yj6__f?entry=ttuhttps://maps.app.goo.gl/ZKSpKUPRegmvuMGT9" target='_blank'>Open in Google Maps</a>
            </Popup>
        </Marker>
    </MapContainer>
  );
};

export default MapComponent;