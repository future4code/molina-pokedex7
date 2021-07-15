import { useEffect, useState } from "react"
import { api } from '../services/api'

export const usePokemonDetails = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({})
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