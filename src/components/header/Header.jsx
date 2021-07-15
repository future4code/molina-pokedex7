import React from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styles';

export const Header = () => {
  const history = useHistory()
  
  return (
    <Container>
      <button onClick={() => history.goBack()}>voltar</button>
      <h1>Detalhes</h1>
      <button >Adicionar ao pokedex</button>
    </Container>
  )
}