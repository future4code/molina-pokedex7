import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyles'
import { GlobalStateContextProvider } from './context/GlobalStateContext'

export const App = () => {
  return (
    <GlobalStateContextProvider>
      <GlobalStyle />
      <Router />
    </GlobalStateContextProvider>
  )
}
