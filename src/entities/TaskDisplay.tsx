import { Title } from '@mantine/core'
import React from 'react'

type Props = {
    task: string
}

function TaskDisplay({ task }: Props) {
    return <Title order={1}>{task}</Title>
}

export default TaskDisplay
