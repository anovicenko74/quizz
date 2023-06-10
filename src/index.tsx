import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles.css'
import { UserProvider } from './context/UserContext'
import Game from './pages/Game'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/game',
        element: <Game />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
)
