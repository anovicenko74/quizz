import styled from '@emotion/styled'

import type { Variant } from '../types'

type Props = {
    variants: Variant[]
    onClick: (e: Event, variant: Variant) => void
}

const colors = ['#4E67AA', '#629AA4', '#D8AE43', '#B8576C', '#782981']

const Card = styled.div((props: any) => ({
    width: '100%',
    height: '100%',
    boxShadow: `0 6px ${props.color}`,
    border: `3px solid ${props.color}`,
    backgroundColor: props.color,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    cursor: 'pointer',
    userSelect: 'none',
}))
const Container = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '200px',
})
const Item = styled.div((props: any) => ({
    width: `calc(100% / ${props.totalOptions})`,
    maxWidth: '400px',
    margin: '0 5px',
}))

const AnswerCards = ({ variants, onClick: handleClick }: Props) => {
    const handleAnimation = (_: Event) => {
        console.log('Animation')
    }

    const onClick = (e: Event, v: Variant) => {
        handleAnimation(e)
        handleClick(e, v)
    }

    return (
        <Container>
            {variants.map((v, i) => (
                <Item key={v.value} totalOptions={variants.length}>
                    <Card
                        onClick={(e: Event) => onClick(e, v)}
                        color={colors[i % colors.length]}
                    >
                        {v.value}
                    </Card>
                </Item>
            ))}
        </Container>
    )
}

export default AnswerCards
