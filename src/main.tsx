import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle.tsx'

import App from './App.tsx'
import { FontLoader } from './styles/FontLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <FontLoader />
    <App />
  </StrictMode>,
)