import { useMantineColorScheme, ActionIcon } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

type Props = { className?: string }

function ThemeSwitcher({ className }: Props) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    return (
        <ActionIcon
            className={className}
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
    )
}

export default ThemeSwitcher
