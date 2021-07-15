import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from '../App';

export const HomePage = () => {
    const {arrayPokemons,detalhesPokemos,getPictures}=useContext(GlobalStateContext)
    console.log('array de pokemons',arrayPokemons)
    console.log('detalhes de pokemons',detalhesPokemos)
    useEffect(() => {
        getPictures()
    }, [])

    const history = useHistory()
    const pokedex = () => {
        history.push('/carPage')
    }
    const detalhes = (nome) => {
        history.push(`/details/${nome}`)
    }
    return (
        <div>

            <button onClick={pokedex}>ir para pokedex</button>
            <h1>Lista de Pokemons</h1>
            {detalhesPokemos.map((a) => {
                return (
                    <div>
                        <img src={a.sprites.front_default} />
                        <button onClick={()=>detalhes(a.name)}>Detalhes</button>
                        <button>Adicionar a Pokedex</button>
                    </div>

                )
            })}
        </div>
    )
}