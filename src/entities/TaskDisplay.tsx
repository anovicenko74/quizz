import { Box, Title } from '@mantine/core'
import React from 'react'

import TimeBar from './TimeBar'

type Props = {
    task: string
    onTimer: () => void
    time: number
}

function TaskDisplay({ task, onTimer, time }: Props) {
    return (
        <Box>
            <TimeBar time={time} onTimer={onTimer} />
            <Title order={1}>{task}</Title>
        </Box>
    )
}

export default TaskDisplay
