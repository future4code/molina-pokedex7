import React, { useContext } from 'react'
import { PokemonsContext } from "../../context/pokemonsContext";
import { Cards } from '../../components/cards/Cards'
import { Container } from './styles'

export const Home = () => {
    const { pokemons, isLoading, error } = useContext(PokemonsContext)

    return (
        <Container>
            <div className='cards'>
                {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
                {!isLoading && error && <p>Ocorreu um Erro</p>}
                {!isLoading && pokemons && pokemons.length > 0 && (
                    pokemons.map(({name}, index) => {
                        return (
                            <Cards name={name} key={index} />
                        )
                    })
                )}
                {!isLoading && pokemons && pokemons.length === 0 && (
                    <p>Não há nenhum pokemon</p>
                )}
            </div>
        </Container>
    )
}