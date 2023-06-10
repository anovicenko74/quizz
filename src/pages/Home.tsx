import styled from '@emotion/styled'
import React from 'react'

import WelcomeForm from '../entities/WelcomeForm'
import { Wrapper } from '../shared/Wrapper'

const FormContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const Home = () => {
    return (
        <>
            <Wrapper>
                <FormContainer>
                    <WelcomeForm />
                </FormContainer>
            </Wrapper>
        </>
    )
}

export default Home
