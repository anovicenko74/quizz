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

    // (2) когда страница обновилась сбрасываем таймер
    if (issueIndex !== debounceIndex) {
        setDebounceIndex(issueIndex)
        setTimer(0)
    }

    useEffect(() => {
        timerId.current = setTimeout(() => setTimer((tp) => ++tp), 1000)

        // (1) таймер заканчивает свою работу и обновляется страница
        if (timer >= time) {
            handleSwitch()
        } // в dev режиме двойной рендеринг, поэтому это условие обязано находиться в эффекте

        return () => {
            if (timerId.current !== null) {
                clearTimeout(timerId.current)
            }
        }
    }, [timer, debounceIndex, issueIndex])

    return <Progress value={(timer / time) * 100} />
}

export default TimeBar
