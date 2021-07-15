import React from 'react'
import { useHistory } from "react-router-dom";

export const Pokedex = () =>{
    const history =useHistory()
    
    return(
        <div>
            <button onClick={() => history.goBack()}>voltar</button>
            <h1>Carrinho</h1>
        </div>
    )
}