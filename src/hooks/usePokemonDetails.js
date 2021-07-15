import { useEffect, useState } from "react"
import { api } from '../services/api'

export const usePokemonDetails = (props) => {
  const [destalhesPokemon, setDetalhesPokemon] = useState({})
  
  useEffect(() => {
    api.get(`${props}`)
      .then((res) => {
        setDetalhesPokemon(res.data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, [props])

  return destalhesPokemon
}