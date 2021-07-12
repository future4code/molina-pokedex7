import React from 'react'
import { useHistory } from "react-router-dom";

export const CarPage = () =>{
    const history =useHistory()
    const voltar=()=>{
        history.goBack('')
    }
    return(
        <div>
            <button onClick={voltar}>voltar</button>
            <h1>Carrinho</h1>
        </div>
    )
}