import React from "react";
import { useHistory } from 'react-router-dom';
import img from '../../assets/image/pokebola.gif'
import { Button } from "../button/Button";
import { DivMain } from './styles'

export const Header = () => {
  const history = useHistory()

  return (
    <DivMain>
      <div className='container'>
        <img src={img} alt='logo' />
        <div className='buttons'>
          <Button onClick={() => history.push('/')}>Home</Button>
          <Button onClick={() => history.push('/pokedex')}>Pokedex</Button>
        </div>
      </div>
    </DivMain>
  )
};
