import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles'
import { PokemonsContextProvider } from './context/pokemonsContext'

export const App = () => {
  return (
    <PokemonsContextProvider>
      <GlobalStyle />
      <Router />
    </PokemonsContextProvider>
  )
}
