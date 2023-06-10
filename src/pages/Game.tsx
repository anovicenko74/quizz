import styled from '@emotion/styled'
import { Container, Progress } from '@mantine/core'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfigContext, emptyConfig } from '../context/ConfigContext'
import { UserContext } from '../context/UserContext'
import AnswerCards from '../entities/AnswerCards'
import Result from '../entities/Result'
import TaskDisplay from '../entities/TaskDisplay'

import type { Issue, Variant } from '../types'

const MainItem = styled.div({
    flex: '1 0 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Footer = styled.div({
    padding: '0 0 100px 0',
    '@media (max-width: 768px)': {
        padding: '0 0 30px 0',
    },
})

function Game() {
    const { config } = useContext(ConfigContext)
    const currentConfig = config?.issues?.length ? config : emptyConfig

    const [issue, setIssue] = useState<Issue | null>(currentConfig.issues[0])
    const issueIndex = useRef(0)

    const [mistakesCount, setMistakesCount] = useState(0)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const isNext = currentConfig.issues[issueIndex.current + 1] ? true : false

    const switchIssue = () => {
        if (isNext) {
            issueIndex.current += 1
            setIssue(currentConfig.issues[issueIndex.current])
        } else {
            setIssue(null)
        }
    }

    const timeSwitch = () => {
        switchIssue()
        setMistakesCount((mc) => ++mc)
    }

    const handleClickVariant = (_: Event, variant: Variant) => {
        if (variant.right) switchIssue()
        if (!variant.right) setMistakesCount((c) => ++c)
    }

    useEffect(() => {
        if (!user.name) navigate('/')
    }, [user])

    return (
        <>
            {issue ? (
                <>
                    <MainItem>
                        <TaskDisplay
                            time={
                                config?.meta?.time
                                    ? config.meta.time
                                    : (emptyConfig.meta?.time as number)
                            }
                            task={issue.task}
                            onTimer={timeSwitch}
                        />
                    </MainItem>
                    <Footer>
                        <Container>
                            <AnswerCards
                                onClick={handleClickVariant}
                                variants={issue.variants}
                            />
                            <Progress
                                mt={'30px'}
                                value={
                                    (issueIndex.current /
                                        currentConfig.issues.length) *
                                    100
                                }
                            />
                        </Container>
                    </Footer>
                </>
            ) : (
                <Result mistakesCount={mistakesCount} />
            )}
        </>
    )
}

export default Game
