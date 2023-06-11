import styled from '@emotion/styled'
import { Container, Progress } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfigContext, emptyConfig } from '../context/ConfigContext'
import { UserContext } from '../context/UserContext'
import AnswerCards from '../entities/AnswerCards'
import Result from '../entities/Result'
import TaskDisplay from '../entities/TaskDisplay'

import type { Variant } from '../types'

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

    const [issueIndex, setIssueIndex] = useState<number>(0)
    const [mistakesCount, setMistakesCount] = useState(0)

    const issue = currentConfig.issues[issueIndex]
    const isEnd = currentConfig.issues.length <= issueIndex

    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const switchIssue = () => {
        setIssueIndex((ii) => ++ii)
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
            {!isEnd ? (
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
                            issueIndex={issueIndex}
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
                                    (issueIndex / currentConfig.issues.length) *
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
