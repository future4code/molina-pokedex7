import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyles'
import { PokemonsContextProvider } from './context/pokemonsContext'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <PokemonsContextProvider>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </PokemonsContextProvider>
  )
}
