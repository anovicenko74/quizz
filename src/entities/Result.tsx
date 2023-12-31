import styled from '@emotion/styled'
import { Button, Stack, Title } from '@mantine/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ConfigContext, emptyConfig } from '../context/ConfigContext'
import { UserContext } from '../context/UserContext'
import { ContentCenter } from '../shared/ContentCenter'

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
    const { setConfig } = useContext(ConfigContext)
    return (
        <ContentCenter>
            <Stack align="center">
                <Title ta={'center'} order={3}>
                    Количество ошибок: {mistakesCount}
                </Title>
                <Title ta={'center'} order={2}>{`${getAdvice(mistakesCount)}, ${
                    user.name
                }!`}</Title>
                <Link to={'/'} onClick={() => setConfig(emptyConfig)}>
                    <Button>Вернуться назад</Button>
                </Link>
            </Stack>
        </ContentCenter>
    )
}

export default Result
