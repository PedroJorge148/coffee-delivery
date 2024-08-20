import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./pages/home"

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './pages/cart'
import { App } from './app'
import { Success } from './pages/success'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/success',
        element: <Success />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
