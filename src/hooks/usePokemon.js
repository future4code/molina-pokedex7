import { useEffect, useState, useContext } from "react"
import toast from 'react-hot-toast';
import { GlobalStateContext } from "../context/GlobalStateContext";
import { api } from '../services/api'

export const usePokemonDetails = (props) => {
  const [ pokemonDetails, setPokemonDetails ] = useState({})
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState("");
  
  useEffect(() => {
    setIsLoading(true)
    api.get(`${props}`)
      .then((res) => {
        setPokemonDetails(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }, [props])

  return { pokemonDetails, isLoading, error }
}

export const useGetPokemons = () => {
  const [ pokemons, setPokemons ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState("");

  useEffect(() => {
    setIsLoading(true)
    api.get('?offset=20&limit=20')
      .then((res) => {
        setPokemons(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  return { pokemons, isLoading, error }
}

export const usePokedex = () => {
  const { pokemonsList, setPokemonsList, pokedex, setPokedex } = useContext(GlobalStateContext)

  const addPokemonPokedex = (pokemon) => {
    const objPokemon = {name: pokemon, url: true}
    setPokedex([...pokedex, objPokemon])

    const newList = pokemonsList.filter(({name}) => {
      return name !== pokemon
    })
    setPokemonsList(newList)
    toast.success(`${pokemon} adicionado a pokedex`)
  }

  const removePokemonPokedex = (pokemon) => {
    const objPokemon = {name: pokemon, url: true}
    setPokemonsList([...pokemonsList, objPokemon])
    
    const newList = pokedex.filter(({name}) => {
      return pokemon !== name
    })
    setPokedex(newList)
    toast.error(`${pokemon} removido da pokedex`)
  }

  return { addPokemonPokedex, removePokemonPokedex }
}