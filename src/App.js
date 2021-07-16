import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyles'
import { GlobalStateContextProvider } from './context/GlobalStateContext'

export const App = () => {
  return (
    <GlobalStateContextProvider>
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router />
    </GlobalStateContextProvider>
  )
}
