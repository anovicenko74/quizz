import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles.css'
import { ConfigProvider } from './context/ConfigContext'
import { UserProvider } from './context/UserContext'
import Game from './pages/Game'
import Home from './pages/Home'
import RootStyleProvider from './providers/RootStyleProvider'

import { Notifications } from '@mantine/notifications'

import { Wrapper } from './shared/Wrapper'
import Header from './widgets/Header'

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
        <RootStyleProvider>
            <ConfigProvider>
                <UserProvider>
                    <Notifications />
                    <Wrapper>
                        <Header />
                        <RouterProvider router={router} />
                    </Wrapper>
                </UserProvider>
            </ConfigProvider>
        </RootStyleProvider>
    </React.StrictMode>
)
