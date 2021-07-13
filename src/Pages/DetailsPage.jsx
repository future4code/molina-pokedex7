import React from 'react'
import { useHistory } from "react-router-dom";
import {Main, Container, Fotos, Header } from './PokemonDetails/style';

export const DetailsPage = () =>{
    const history =useHistory()
    const voltar=()=>{
        history.goBack('')
    }
    return(
        <Container>
        
        <Header>
            <button onClick={voltar}>voltar</button>
            <h1>Detalhes</h1>
            <button >Adicionar ao pokedex</button>
        </Header>
         <Main>
        <Fotos>
            <p>Foto Frente</p>
            <p>Foto costa</p>
        </Fotos>         

         </Main>

        </Container>
    )
}