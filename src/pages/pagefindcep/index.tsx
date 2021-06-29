import React, { useState, FormEvent, useEffect } from 'react';
import apiViaCEP from '../../services/api';

import {
  Title,
  Form,
  Adresses,
  Error
} from './styles';

const FrontPage: React.FC = () => {
  const [ newAddress, setNewAddress ] = useState('');
  const [ inputError,setInputError] = useState('');
  const [ addresses, setAddress ] = useState<ViaCEPInfo[]>(()=> {
    const storageAddresses = localStorage.getItem('https://viacep.com.br/ws/');

    if(storageAddresses) {
      return JSON.parse(storageAddresses);
    }
    return [];
  });

  useEffect(()=> {
    localStorage.setItem('https://viacep.com.br/ws/', JSON.stringify(addresses));
  },[ addresses ]);

  async function handleAddCEP (event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();

    if(!newAddress){
      setInputError('Digite um CEP valido');
      return
    }

    try{
      const response = await apiViaCEP.get(`${newAddress}/json`);
      const address = response.data;

      setAddress([ address ]);
      setNewAddress('');
      setInputError('');
    } catch(err) {
      setInputError('Erro na busca por esse CEP');
    }

  };
  return(
    <>

      <Title>Buscador de CEP</Title>

      <Form
      hasError ={!!inputError}
      onSubmit={handleAddCEP}
      >
        <input
        value={newAddress}
        onChange={(e) =>
        setNewAddress(e.target.value)}
        placeholder="Digite o CEP"
        />
        <button type="submit">Buscar</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }

      <Adresses>

      {addresses.map(address => (

        <a href="/locationmap">
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

export default FrontPage;
