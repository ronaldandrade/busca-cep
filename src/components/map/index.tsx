import React from 'react';
import { MapContainer as LeafletMap, MapContainerProps as LeafletMapProps,TileLayer } from 'react-leaflet';

interface MapProps extends LeafletMapProps{
  // eslint-disable-next-line react/require-default-props
  interactive?: boolean
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Map({children, interactive = true, ...props }: MapProps) {
  return (
    <LeafletMap
    center={[51.505, -0.09]}
    zoom={13} s
    crollWheelZoom={false}
    style={{ width: '100%', height: '100%' }}
    zoomControl={interactive}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    >
  <TileLayer
 url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ" />

</LeafletMap>
  );
}
