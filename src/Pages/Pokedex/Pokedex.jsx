import React, { useContext } from 'react'
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { usePokedex } from "../../hooks/usePokemon";
import { Cards } from '../../components/cards/Cards'
import { Container } from './styles'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Button } from '../../components/button/Button';

export const Pokedex = () => {
    const { pokedex, isLoading, error } = useContext(GlobalStateContext)
    const { removePokemonPokedex } = usePokedex()

    return (
        <> 
            <Header />
            <Container>
                <div className='cards'>
                    {isLoading && <img src="https://cdn.hotware.com.tw/v_comm/global/images/loading.gif" alt="loading" /> }
                    {!isLoading && error && <p>Ocorreu um Erro</p>}
                    {!isLoading && pokedex && pokedex.length > 0 && (
                        pokedex.map(({name}, index) => {
                            return (
                                <div key={index}>
                                    <Cards name={name} />
                                    <Button onClick={() => removePokemonPokedex(name)}>Remover</Button>
                                </div>
                            )
                        })
                    )}
                    {!isLoading && pokedex && pokedex.length === 0 && (
                        <p>Não há nenhum pokemon</p>
                    )}
                </div>
            </Container>
            <Footer />
        </>
    )
}