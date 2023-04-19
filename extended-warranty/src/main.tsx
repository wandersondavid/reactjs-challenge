import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

import { ThemeProvider } from '@mui/material';
import { theme } from './config'
import { ShoppingCartProvider } from './context/context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ShoppingCartProvider>
        <Header />
        <App />
        {/* <Footer /> */}
      </ShoppingCartProvider>
    </ThemeProvider>
  </React.StrictMode>
)
