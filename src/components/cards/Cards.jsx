import React from 'react';
import { useHistory } from "react-router-dom";
import { usePokemonDetails } from '../../hooks/usePokemonDetails'

export const Cards= (props) => {
  const destalhesPokemon = usePokemonDetails(props.name)
  console.log(destalhesPokemon)
  const history = useHistory()

  return (
    <div>
      <h2>{destalhesPokemon.name}</h2>
      <img src={destalhesPokemon.sprites.front_default} alt={destalhesPokemon.name} />
      <button onClick={() => history.push(`/details/`)}>Detalhes</button>
      <button>Adicionar a Pokedex</button>
    </div>
  )
}