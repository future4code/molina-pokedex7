import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { PokemonsContext } from "../../context/pokemonsContext";
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import {
    CardFotos,
    Topo,
    Conteudocard,
    PrincipaisAtaques,
    Main,
    Container,
    Fotos,
    Poderes
} from './styles';

export const PokemonsDetails = () => {
    const { detalhesPokemos } = useContext(PokemonsContext)
    const params = useParams()
    const nome = params.name
    console.log(nome)
    const details = detalhesPokemos.filter((x) => {
        return x.name === nome
    }).map((x) => {
        return [x.moves, x.stats]
    })
    console.log('detalhes', details)

    return (
        <Container>
            <Main>
                <CardFotos>
                    <Fotos>
                        {detalhesPokemos.map((x) => {
                            return x.name === nome && <img src={x.sprites.front_default} alt={x.name} />
                        })}
                        <p>Foto Frente.....</p>
                    </Fotos>
                    <Fotos>
                        {detalhesPokemos.map((x) => {
                            return x.name === nome && <img src={x.sprites.front_default} alt={x.name} />
                        })}
                        <p>Foto Costa.....</p>
                    </Fotos>
                </CardFotos>
                <Poderes>
                    <h2>Poderes</h2>
                    <p> <b> hp: </b> 80 </p>
                    <p> <b> attack: </b> 82 </p>
                    <p> <b> defense: </b> 83 </p>
                    <p> <b> special-attack: </b> 100 </p>
                    <p> <b> special-defense: </b> 100</p>
                    <p> <b> speed: </b> 80</p>
                </Poderes>
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
            </Main>
        </Container>
    )
}