import styled from '@emotion/styled'
import React from 'react'

import { H2, H3, MistakesTitle } from '../shared/Titles'

type Props = {
    mistakesCount: number
}

const Container = styled.div({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const getAdvice = (mistakesCount: number) => {
    if (mistakesCount === 0) return 'Идеально!'
    else if (mistakesCount <= 2) return 'Почти идеально'
    else return 'Тебе надо тренироваться'
}

function Result({ mistakesCount }: Props) {
    return (
        <Container>
            <H2>Игра завершена!</H2>
            <MistakesTitle>Количество ошибок: {mistakesCount}</MistakesTitle>
            <H3>{getAdvice(mistakesCount)}</H3>
        </Container>
    )
}

export default Result
