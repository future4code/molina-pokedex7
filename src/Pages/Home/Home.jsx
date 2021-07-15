import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { PokemonsContext } from "../../context/pokemonsContext";
import { Cards } from '../../components/cards/Cards'

export const Home = () => {
    const pokemons = useContext(PokemonsContext)
    const history = useHistory()

    return (
        <div>
            <button onClick={() => history.push('/pokedex')}>ir para pokedex</button>
            <h1>Lista de Pokemons</h1>
            {pokemons.map(({name}, index) => {
                return (
                    <Cards name={name} key={index} />
                )
            })}
        </div>
    )
}