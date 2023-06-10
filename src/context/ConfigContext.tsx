import type { Issue } from '../types'
import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
    config: Issue[] | null
    setConfig: (config: Issue[]) => void
}

export const emptyConfig: Issue[] = []

export const ConfigContext = createContext<ContextType>({
    config: null,
    setConfig: () => null,
})

type ProviderProps = {
    children: ReactNode
}
export const ConfigProvider = ({ children }: ProviderProps) => {
    const [config, setConfig] = useState<Issue[]>(emptyConfig)

    return (
        <ConfigContext.Provider
            value={{
                config,
                setConfig,
            }}
        >
            {children}
        </ConfigContext.Provider>
    )
}
