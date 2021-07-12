import React from 'react'
import { useHistory } from "react-router-dom";

export const DetailsPage = () =>{
    const history =useHistory()
    const voltar=()=>{
        history.goBack('')
    }
    return(
        <div>
            <button onClick={voltar}>voltar</button>
            <button >Adicionar ao pokedex</button>
            <h1>Detalhes</h1>
        </div>
    )
}