import React, { useState, createContext, useEffect } from 'react'
import { api } from '../services/api'

export const PokemonsContext = createContext()

export const PokemonsContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState("");

  useEffect(() => {
    setIsLoading(true)
    api.get('?offset=20&limit=20')
      .then((res) => {
        setPokemons(...pokemons, res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  return (
    <PokemonsContext.Provider value={{ pokemons, isLoading, error }}>
      {props.children}
    </PokemonsContext.Provider>
  )
}