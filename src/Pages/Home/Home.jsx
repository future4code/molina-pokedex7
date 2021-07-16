import React, { useContext } from 'react'
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { usePokedex } from "../../hooks/usePokemon";
import { Cards } from '../../components/cards/Cards'
import { Container } from './styles'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
    const { pokemonsList, isLoading, error } = useContext(GlobalStateContext)
    const { addPokemonPokedex } = usePokedex()

    return (
        <> 
            <Header />
            <Container>
                <div className='cards'>
                    {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
                    {!isLoading && error && <p>Ocorreu um Erro</p>}
                    {!isLoading && pokemonsList && pokemonsList.length > 0 && (
                        pokemonsList.map(({name}, index) => {
                            return (
                                <>
                                    <Cards name={name} key={index} />
                                    <button onClick={() => addPokemonPokedex(name)}>Add a Pokedex</button>
                                </>
                            )
                        })
                    )}
                    {!isLoading && pokemonsList && pokemonsList.length === 0 && (
                        <p>Não há nenhum pokemon</p>
                    )}
                </div>
            </Container>
            <Footer />
        </>
    )
}