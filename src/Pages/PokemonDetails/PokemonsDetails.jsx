import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import {
    CardFotos,
    Topo,
    Conteudocard,
    PrincipaisAtaques,
    Main,
    Fotos,
    Poderes
} from './styles';

export const PokemonsDetails = () => {
    const { name } = useParams()
    const { pokemonDetails, isLoading, error } = usePokemonDetails(name)
    const [ changeImage, setChangeImage ] = useState(true)

    const loading = "https://cdn.hotware.com.tw/v_comm/global/images/loading.gif"

    return (
        <>
            <Header />
            <Main>
                {isLoading && <img className='loading' src={loading} alt="loading" /> }
                {!isLoading && error && <p>Ocorreu um Erro</p>}
                {!isLoading && pokemonDetails && (
                    <>
                        <CardFotos>
                            <Fotos>
                                {pokemonDetails.sprites && pokemonDetails.sprites.front_default && (
                                    changeImage === true ? <img src={pokemonDetails.sprites.front_default} alt="pokemon" /> : <img src={pokemonDetails.sprites.back_default} alt="pokemon" />
                                )}
                            </Fotos>
                            <div className='menu'>
                                <button onClick={() => setChangeImage(true)}>{pokemonDetails.sprites && pokemonDetails.sprites.front_default && <img src={pokemonDetails.sprites.front_default} alt="pokemon" />}</button>
                                <button onClick={() => setChangeImage(false)}>{pokemonDetails.sprites && pokemonDetails.sprites.front_default && <img src={pokemonDetails.sprites.back_default} alt="pokemon" />}</button>
                            </div>
                        </CardFotos>
                        <PrincipaisAtaques>
                            <h2>Tipo:</h2>
                            <Topo>
                                {pokemonDetails && pokemonDetails.types && pokemonDetails.types.map(({type}) => {
                                    return (
                                        <div key={type.name}>
                                            <p>{type.name}</p>
                                        </div>
                                    )
                                })}
                            </Topo>
                            <h2>Principais Ataques</h2>
                            <Conteudocard>
                                {pokemonDetails && pokemonDetails.moves && pokemonDetails.moves.map(({move}) => {
                                    return (
                                        <div key={move.name}>
                                            <p>{move.name}</p>
                                        </div>
                                    )
                                })}
                            </Conteudocard>
                        </PrincipaisAtaques>
                        <Poderes>
                            <h2>Stats</h2>
                            <p><b>hp:</b>80</p>
                            <p><b>attack:</b>82</p>
                            <p><b>defense:</b>83</p>
                            <p><b>special-attack:</b>100</p>
                            <p><b>special-defense:</b>100</p>
                            <p><b>speed:</b>80</p>
                        </Poderes>
                    </>
                )}
            </Main>
            <Footer />
        </>
    )
}