import React, { useState } from 'react'
import axios from 'axios'
import { Router } from './routes/Router'

export const GlobalStateContext = React.createContext()


export const App = () => {
  const [arrayPokemons,setArrayPokemons]=useState([])
  const [detalhesPokemos,setDetalhesPokemon]=useState([])
  const array1=[]
  const getPokemons = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then((res)=>{
      setArrayPokemons(res.data.results.map((a)=>{
        return a.name
      }))
    })
  }
  const getPictures = ()=>{
    getPokemons()
    for(let i=0; i<arrayPokemons.length;i++){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${arrayPokemons[i]}/`)
      .then((res)=>{
          array1.push(res.data)
          setDetalhesPokemon([...array1]) 
      })
     } 
  }
  return (
    <GlobalStateContext.Provider value={{arrayPokemons,detalhesPokemos,getPictures}}>
    <Router />
    </GlobalStateContext.Provider>
  )
}
