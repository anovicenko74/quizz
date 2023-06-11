import { Progress } from '@mantine/core'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    time: number
    onTimer: () => void
    issueIndex: number
}

const TimeBar = ({ time, onTimer: handleSwitch, issueIndex }: Props) => {
    const [timer, setTimer] = useState(0)
    const [debounceIndex, setDebounceIndex] = useState(issueIndex)
    const timerId = useRef<NodeJS.Timer | null>(null)

    if (issueIndex !== debounceIndex) {
        setDebounceIndex(issueIndex)
        setTimer(0)
    }

    useEffect(() => {
        timerId.current = setTimeout(() => setTimer((tp) => ++tp), 1000)

        if (timer >= time) {
            handleSwitch()
        }

        return () => {
            if (timerId.current !== null) {
                clearTimeout(timerId.current)
            }
        }
    }, [timer, debounceIndex, issueIndex])

    return <Progress value={(timer / time) * 100} />
}

export default TimeBar
