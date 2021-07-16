import React from 'react';
import { useHistory } from "react-router-dom";
import { usePokemonDetails, usePokedex } from '../../hooks/usePokemon'
import { Button } from '../button/Button'
import { Container } from './styles'

export const Cards= (props) => {
  const history = useHistory()
  const { pokemonDetails, isLoading, error } = usePokemonDetails(props.name)
  const { changeButton, addPokemonPokedex, removePokemonPokedex } = usePokedex()

  return (
    <Container>
      {isLoading && <img className='loading' src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
      {!isLoading && error && <p>Ocorreu um Erro</p>}
      {!isLoading && pokemonDetails && (
        <>
          <h2>{pokemonDetails.name}</h2>
          <div className='image'>
            {pokemonDetails.sprites && pokemonDetails.sprites.front_default && <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />}
          </div>
          <div className='button'>
            <Button color='var(--blue-color)' onClick={() => history.push(`/details/${pokemonDetails.name}`)}>Detalhes</Button>
            {changeButton === true
              ? <Button color='#6acb12' onClick={() => addPokemonPokedex(pokemonDetails.name)}>Add a Pokedex</Button>
              : <Button color='var(--red-color)' onClick={() => removePokemonPokedex(pokemonDetails.name)}>Remover</Button>
            }
          </div>
        </>
      )}
    </Container>
  )
}