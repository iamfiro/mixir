import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle.tsx'

import { Router } from './router/Router.tsx'
import { FontLoader } from './styles/FontLoader.tsx'
import { HelmetProvider } from 'react-helmet-async'

import './styles/variable.css'
import '@creative-kit/react/dist/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <FontLoader />
                <Router />
            </QueryClientProvider>
        </HelmetProvider>
    </StrictMode>,
)
