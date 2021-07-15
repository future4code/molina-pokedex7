import React, { useState, createContext, useEffect } from 'react'
import { api } from '../services/api'

export const PokemonsContext = createContext()

export const PokemonsContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    api.get('?offset=20&limit=20')
      .then((res) => {
        setPokemons(...pokemons, res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <PokemonsContext.Provider value={ pokemons }>
      {props.children}
    </PokemonsContext.Provider>
  )
}