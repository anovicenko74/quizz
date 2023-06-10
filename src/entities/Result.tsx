import styled from '@emotion/styled'
import { Button, Stack, Title } from '@mantine/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

type Props = {
    mistakesCount: number
}

const Wrapper = styled.div({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const getAdvice = (mistakesCount: number) => {
    if (mistakesCount === 0) return 'Идеально'
    else if (mistakesCount <= 2) return 'Почти идеально'
    else return 'Тебе надо тренироваться'
}

function Result({ mistakesCount }: Props) {
    const { user } = useContext(UserContext)

    return (
        <Wrapper>
            <Stack>
                <Title ta={'center'} order={3}>
                    Количество ошибок: {mistakesCount}
                </Title>
                <Title ta={'center'} order={2}>{`${getAdvice(mistakesCount)}, ${
                    user.name
                }!`}</Title>
                <Link to={'/'}>
                    <Button>Вернуться назад</Button>
                </Link>
            </Stack>
        </Wrapper>
    )
}

export default Result
