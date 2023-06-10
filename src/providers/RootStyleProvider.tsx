'use client'

import { useLocalStorage } from '@mantine/hooks'

import { theme } from '../theme'

import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import type { ColorScheme, MantineThemeOverride } from '@mantine/core'
import type { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const RootStyleProvider = ({ children }: Props) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    const computedTheme: MantineThemeOverride = {
        ...theme,
        colorScheme: colorScheme,
    }

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={computedTheme}
                withGlobalStyles
                withNormalizeCSS
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default RootStyleProvider
