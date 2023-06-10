import styled from '@emotion/styled'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AnswerCards from '../components/AnswerCards'
import Result from '../components/Result'
import TaskDisplay from '../components/TaskDisplay'
import { UserContext } from '../context/UserContext'
import { MistakesTitle } from '../shared/Titles'
import { Wrapper } from '../shared/Wrapper'

import type { Issue } from '../issues'
import { issues } from '../issues'
import type { Variant } from '../types'

const Header = styled.div({
    height: '64px',
    transition: 'background .3s ease,box-shadow .3s ease',
    boxShadow: 'inset 0 -1px 0 0 var(--accents-2)',
    transform: 'translateZ(0)',
    backdropFilter: 'saturate(180%) blur(5px)',
    background: 'rgba(0,0,0,.8)',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    padding: '0 5px 0 0',
    fontSize: '2rem',
    color: '#8C4D5E',
})

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
    const [issue, setIssue] = useState<Issue | null>(issues[0])
    const [mistakesCount, setMistakesCount] = useState(0)
    const issueIndex = useRef(0)
    const isNext = issues[issueIndex.current + 1] ? true : false
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    const onVariantClick = (_: Event, variant: Variant) => {
        if (variant.right && isNext) {
            issueIndex.current += 1
            setIssue(issues[issueIndex.current])
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
        <>
            {issue ? (
                <div className="App">
                    <Wrapper>
                        <Header>
                            <MistakesTitle>{`Ошибок: ${mistakesCount}`}</MistakesTitle>
                        </Header>
                        <MainItem>
                            <TaskDisplay task={issue.task} />
                        </MainItem>
                        <Footer>
                            <AnswerCards
                                onClick={onVariantClick}
                                variants={issue.variants}
                            />
                        </Footer>
                    </Wrapper>
                </div>
            ) : (
                <Result mistakesCount={mistakesCount} />
            )}
        </>
    )
}

export default Game
