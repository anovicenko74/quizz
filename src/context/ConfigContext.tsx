import type { Config } from '../types'
import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

type ContextType = {
    config: Config | null
    setConfig: (config: Config) => void
}

export const emptyConfig: Config = {
    issues: [
        {
            task: 'Нюхай ...!',
            variants: [
                {
                    value: 'кота',
                },
                {
                    value: 'псину',
                },
                {
                    value: 'бебру',
                    right: true,
                },
            ],
        },
        {
            task: 'Игра 2013 года',
            variants: [
                {
                    value: 'Fallout 3',
                },
                { value: 'The last of us', right: true },
                {
                    value: 'Metal Gear Solid V',
                },
                {
                    value: 'Гульман 4',
                },
            ],
        },
    ],
    meta: {
        time: 3,
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
