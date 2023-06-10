import type { User } from '../types'
import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
    user: User
    setUser: (u: User) => void
}

const defaultValue: ContextType = {
    user: {
        name: '',
        age: 0,
    },
    setUser: (u) => null,
}

export const UserContext = createContext<ContextType>(defaultValue)

type ProviderProps = {
    children: ReactNode
}

export const UserProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<User>(defaultValue.user)

    return (
        <UserContext.Provider
            value={{
                user: user,
                setUser: (u) => setUser(u),
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
