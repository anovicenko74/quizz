import type { Config } from '../types'
import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
    config: Config | null
    setConfig: (config: Config) => void
}

export const emptyConfig: Config = {
    issues: [],
    meta: {
        time: 5,
    },
}

export const ConfigContext = createContext<ContextType>({
    config: emptyConfig,
    setConfig: () => null,
})

type ProviderProps = {
    children: ReactNode
}
export const ConfigProvider = ({ children }: ProviderProps) => {
    const [config, setConfig] = useState<Config>(emptyConfig)

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
