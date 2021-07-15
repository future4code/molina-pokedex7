import React from "react";
import {useHistory} from 'react-router-dom';
import {goToHomePage} from "../routes/Router";
import styled from 'styled-components'
import HeaderTest from '../imagens/img.gif'



const DivMain = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  margin: auto;
  text-align: center;
  
`

const Imagem = styled.img`
    width: 100%;
    height: 100px;
    margin: 0px;
    padding: 0px;
    
`

const Header = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/");
  };

  return (
      <DivMain>
        <Imagem src={HeaderTest}/>
        <button type="button" class="nes-btn is-success" onClick={() =>goToHomePage(history)}>Home</button>
          
      </DivMain>
  )
};

export default Header;
