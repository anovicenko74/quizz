import type { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
    primaryColor: 'bright-pink',
    defaultRadius: 'md',
    fontFamily: 'Arial, Helvetica, sans-serif',
    primaryShade: { light: 4, dark: 9 },
    colors: {
        'bright-pink': [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
        ],
        dark: [
            '#d5d7e0',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a',
        ],
    },
}
