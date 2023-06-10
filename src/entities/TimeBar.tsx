import { Progress } from '@mantine/core'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    time: number
    onTimer: () => void
}

const TimeBar = ({ time, onTimer: handleSwitch }: Props) => {
    const [timer, setTimer] = useState(0)
    const timerId = useRef<NodeJS.Timer | null>(null)

    useEffect(() => {
        timerId.current = setInterval(() => setTimer((tp) => ++tp), 1000)
        if (timer >= time) {
            setTimer(0)
            handleSwitch()
        }

        return () => {
            if (timerId.current !== null) clearInterval(timerId.current)
        }
    }, [timer])

    return <Progress value={(timer / time) * 100} />
}

export default TimeBar
