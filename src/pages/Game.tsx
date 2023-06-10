import styled from '@emotion/styled'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfigContext } from '../context/ConfigContext'
import { UserContext } from '../context/UserContext'
import AnswerCards from '../entities/AnswerCards'
import Result from '../entities/Result'
import TaskDisplay from '../entities/TaskDisplay'
import { Wrapper } from '../shared/Wrapper'
import Header from '../widgets/Header'

import type { Issue, Variant } from '../types'

const defaultConfig = [
    {
        task: '2 * _ = 36',
        variants: [
            {
                value: 2,
            },
            {
                value: 18,
                right: true,
            },
            {
                value: 3,
            },
            {
                value: 5,
            },
        ],
    },
]

const MainItem = styled.div({
    flex: '1 0 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Footer = styled.div({
    padding: '0 0 100px 0',
})

function Game() {
    const { config } = useContext(ConfigContext)
    const currentConfig = config?.length ? config : defaultConfig
    const [issue, setIssue] = useState<Issue | null>(currentConfig[0])
    const [mistakesCount, setMistakesCount] = useState(0)
    const issueIndex = useRef(0)
    const isNext = currentConfig[issueIndex.current + 1] ? true : false
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const onVariantClick = (_: Event, variant: Variant) => {
        if (variant.right && isNext) {
            issueIndex.current += 1
            setIssue(currentConfig[issueIndex.current])
        }
        if (!variant.right) {
            setMistakesCount((c) => ++c)
        }
        if (!isNext) {
            setIssue(null)
        }
    }

    useEffect(() => {
        if (!user.name) navigate('/')
    }, [user])

    return (
        <Wrapper>
            <Header />
            {issue ? (
                <>
                    <MainItem>
                        <TaskDisplay task={issue.task} />
                    </MainItem>
                    <Footer>
                        <AnswerCards
                            onClick={onVariantClick}
                            variants={issue.variants}
                        />
                    </Footer>
                </>
            ) : (
                <Result mistakesCount={mistakesCount} />
            )}
        </Wrapper>
    )
}

export default Game
