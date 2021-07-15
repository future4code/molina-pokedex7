import React from 'react';
import { useHistory } from "react-router-dom";
import { usePokemonDetails } from '../../hooks/usePokemonDetails'

export const Cards= (props) => {
  const pokemonDetails = usePokemonDetails(props.name)
  const history = useHistory()

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      {pokemonDetails.sprites && pokemonDetails.sprites.front_default && <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />}
      <button onClick={() => history.push(`/details/${pokemonDetails.name}`)}>Detalhes</button>
      <button>Adicionar a Pokedex</button>
    </div>
  )
}