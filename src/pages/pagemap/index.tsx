import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup } from 'react-leaflet';

import Map from '../../components/map'
import { Adresses } from '../pagefindcep/styles';

import { Title } from './styles'

const containerMap: React.FC = () => (

  <>
    <Title>Buscador de CEP</Title>

    <Map className="mapcontent">
    <div className="mapid">
      <Marker position={[-23.56452, -46.61708]}>
        <Popup closeButton={false} minWidth={240} maxWidth={240} />
      </Marker>
      </div>
    </Map>

    <Adresses>
      <a href="/">
        <div>
          <h1>asdasd</h1>
          <strong>asdasd</strong>
          <p>asdasd</p>
          <p>adasdasd</p>
        </div>
      </a>
    </Adresses>

</>
)

export default containerMap;
