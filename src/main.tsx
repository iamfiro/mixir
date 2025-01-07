import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle.tsx'

import App from './App.tsx'
import { FontLoader } from './styles/FontLoader.tsx'
import { HelmetProvider } from 'react-helmet-async'

import './styles/variable.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <GlobalStyle />
    <FontLoader />
    <App />
    </HelmetProvider>
  </StrictMode>,
)