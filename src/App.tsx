import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'

import type { Variant } from './types'

import AnswerCards from './components/AnswerCards'
import Result from './components/Result'
import TaskDisplay from './components/TaskDisplay'
import type { Issue } from './issues'
import { issues } from './issues'

const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
})

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

function App() {
    const [issue, setIssue] = useState<Issue | null>(issues[0])
    const [mistakesCount, setMistakesCount] = useState(0)
    const issueIndex = useRef(0)
    const isNext = issues[issueIndex.current + 1] ? true : false

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

    return (
        <>
            {issue ? (
                <div className="App">
                    <Wrapper>
                        <Header>{`Ошибок: ${mistakesCount}`}</Header>
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

export default App
