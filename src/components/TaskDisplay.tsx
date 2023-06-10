import styled from '@emotion/styled'
import React from 'react'

type Props = {
    task: string
}

const Title = styled.h2({
    fontSize: '3em',
})

function TaskDisplay({ task }: Props) {
    return <Title>{task}</Title>
}

export default TaskDisplay
