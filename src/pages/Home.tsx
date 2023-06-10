import { Box } from '@mantine/core'
import React from 'react'

import WelcomeForm from '../features/WelcomeForm'
import { ContentCenter } from '../shared/ContentCenter'

const Home = () => {
    return (
        <ContentCenter>
            <Box pt="20px" pb="20px">
                <WelcomeForm />
            </Box>
        </ContentCenter>
    )
}

export default Home
