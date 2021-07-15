import React, { useContext, useState } from 'react'
import { useParams } from "react-router-dom";
import { PokemonsContext } from "../../context/pokemonsContext";
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
    const [ changeImage, setChangeImage ] = useState(true)
    // const { detalhesPokemos } = useContext(PokemonsContext)
    // const params = useParams()
    // const nome = params.name
    // console.log(nome)
    // const details = detalhesPokemos.filter((x) => {
    //     return x.name === nome
    // }).map((x) => {
    //     return [x.moves, x.stats]
    // })
    // console.log('detalhes', details)

    return (
        <div>
            <Main>
                <CardFotos>
                    <Fotos>
                        {/* {detalhesPokemos.map((x) => {
                            return x.name === nome && <img src={x.sprites.front_default} alt={x.name} />
                        })} */}
                        {changeImage === true ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pokemon" /> : <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png" alt="pokemon" />}
                    </Fotos>
                    <div className='menu'>
                        {/* {detalhesPokemos.map((x) => {
                            return x.name === nome && <img src={x.sprites.front_default} alt={x.name} />
                        })} */}
                        <button onClick={() => setChangeImage(true)}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pokemon" /></button>
                        <button onClick={() => setChangeImage(false)}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png" alt="pokemon" /></button>
                    </div>
                </CardFotos>
                <PrincipaisAtaques>
                    <Topo>
                        <p>grass</p>
                        <p>poison</p>
                    </Topo>
                    <Conteudocard>
                        <h2>Principais Ataques</h2>
                        <p>swords-dance</p>
                        <p>cut</p>
                        <p>bind</p>
                        <p>vine-whip</p>
                        <p>headbutt</p>
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
            </Main>
        </div>
    )
}