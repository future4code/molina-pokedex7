import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemon";
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
                            <h2>{pokemonDetails.name}</h2>
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
                                {pokemonDetails.types && pokemonDetails.types.map(({type}) => {
                                    return (
                                        <div key={type.name}>
                                            <p>{type.name}</p>
                                        </div>
                                    )
                                })}
                            </Topo>
                            <h2>Principais Ataques</h2>
                            <Conteudocard>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[0].move.name}</p>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[1].move.name}</p>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[2].move.name}</p>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[3].move.name}</p>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[4].move.name}</p>
                                <p>{pokemonDetails.moves && pokemonDetails.moves[5].move.name}</p>
                            </Conteudocard>
                        </PrincipaisAtaques>
                        <Poderes>
                            <h2>Stats</h2>
                            <p><b>hp:</b> {pokemonDetails.stats && pokemonDetails.stats[0].base_stat}</p>
                            <p><b>attack:</b> {pokemonDetails.stats && pokemonDetails.stats[1].base_stat}</p>
                            <p><b>defense:</b> {pokemonDetails.stats && pokemonDetails.stats[2].base_stat}</p>
                            <p><b>special-attack:</b> {pokemonDetails.stats && pokemonDetails.stats[3].base_stat}</p>
                            <p><b>special-defense:</b> {pokemonDetails.stats && pokemonDetails.stats[4].base_stat}</p>
                            <p><b>speed:</b> {pokemonDetails.stats && pokemonDetails.stats[5].base_stat}</p>
                        </Poderes>
                    </>
                )}
            </Main>
            <Footer />
        </>
    )
}