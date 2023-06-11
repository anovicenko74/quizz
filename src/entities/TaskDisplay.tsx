import { Box, Title } from '@mantine/core'
import React from 'react'

import TimeBar from '../shared/TimeBar'

type Props = {
    task: string
    onTimer: () => void
    time: number
    issueIndex: number
}

function TaskDisplay({ task, onTimer, time, issueIndex }: Props) {
    return (
        <Box>
            <TimeBar time={time} onTimer={onTimer} issueIndex={issueIndex} />
            <Title order={1}>{task}</Title>
        </Box>
    )
}

export default TaskDisplay
