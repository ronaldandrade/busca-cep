import 'leaflet/dist/leaflet.css'
import React from 'react';
import { MapContainer ,Marker,Popup,TileLayer } from 'react-leaflet';

interface MapProps {
  children: React.ReactNode
}

export default function Map({ children }:MapProps) {

return (
  <MapContainer
  style={{
    width: "656px",
    height: "400px",
    background: "#09031A" }}
    center={[51.505, -0.09]}
    zoom={13}
    stylescrollWheelZoom={false} >

    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
      {...children}
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
 );
}
