import { Group, Header as MantineHeader } from '@mantine/core'
import React from 'react'

import ThemeSwitcher from '../features/ThemeSwitcher'

const Header = () => {
    return (
        <MantineHeader height="64px" px="md">
            <Group position="right" sx={{ height: '100%' }}>
                <ThemeSwitcher />
            </Group>
        </MantineHeader>
    )
}

export default Header
