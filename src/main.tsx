import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routes from './router/router.tsx'
import { ThemeProvider } from './ThemProviders/ThemProviders.tsx'
// import { ThemeProvider } from './ThemProviders/ThemProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider  router={routes}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
