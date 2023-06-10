import styled from '@emotion/styled'
import React from 'react'

import WelcomeForm from '../features/WelcomeForm'
import Header from '../widgets/Header'

const FormContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
})

const Home = () => {
    return (
        <>
            <Header />
            <FormContainer>
                <WelcomeForm />
            </FormContainer>
        </>
    )
}

export default Home
