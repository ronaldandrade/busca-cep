import React, { useEffect, useState } from 'react';
import {  Popup } from 'react-leaflet';

import MapContainer from '../../components/map';

import { Title, Adresses } from './styles';

const containerMap: React.FC = () => {

 const [addresses] = useState<ViaCEPInfo[]>(() => {
  const storageAddresses = localStorage.getItem('https://viacep.com.br/ws/');

    if (storageAddresses) {
      return JSON.parse(storageAddresses);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      'https://viacep.com.br/ws/',
      JSON.stringify(addresses));
  }, [addresses]);

  return (
    <>
      <Title>Buscador de CEP</Title>
      <MapContainer>
        <Popup closeButton={false} minWidth={240} maxWidth={240} />
      </MapContainer>
      <Adresses>
        {addresses.map(address => (
          <a href="/">
            <div>
              <h1>{address.cep}</h1>
              <strong>{address.logradouro}</strong>
              <p>{address.bairro}</p>
              <p>{address.uf}</p>
            </div>
          </a>
        ))}
      </Adresses>
    </>
  )
}


export default containerMap;
