import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const [arrayPokemons, setArrayPokemons] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
            .then((res) => {
                console.log(res.data.results)
                setArrayPokemons(res.data.results)
            })
    }, [])
    console.log('array', arrayPokemons)
    const history = useHistory()
    const pokedex = () => {
        history.push('/carPage')
    }
    const detalhes = () => {
        history.push('/details')
    }
    return (
        <div>

            <button onClick={pokedex}>ir para pokedex</button>
            <h1>Lista de Pokemons</h1>
            {arrayPokemons.map((a) => {
                return (
                    <div>
                        <h1>{a.name}</h1>
                        <button onClick={detalhes}>Detalhes</button>
                        <button>Adicionar a Pokedex</button>
                    </div>

                )
            })}
        </div>
    )
}