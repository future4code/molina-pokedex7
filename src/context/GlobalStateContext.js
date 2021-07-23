import React, { useState, createContext, useEffect } from 'react'
import { useGetPokemons } from '../hooks/usePokemon'

export const GlobalStateContext = createContext()

export const GlobalStateContextProvider = (props) => {
  const { pokemons, isLoading, error } = useGetPokemons()
  const [ pokemonsList, setPokemonsList ] = useState([])
  const [ pokedex, setPokedex ] = useState([])

  useEffect(() => {
    if (pokemons.length > 0) {
      setPokemonsList(pokemons)
    }
  }, [pokemons])

  return (
    <GlobalStateContext.Provider
      value={{ pokemonsList, setPokemonsList, pokedex, setPokedex, isLoading, error }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  )
}