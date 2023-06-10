import styled from '@emotion/styled'
import React, { useContext } from 'react'

import { UserContext } from '../context/UserContext'

import type { User } from '../types'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
})

export default function WelcomeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>()

    const { setUser } = useContext(UserContext)

    const onSubmit: SubmitHandler<User> = (data) => setUser(data)

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} />
            {errors.age && <span>Введи своё имя!</span>}

            <input {...register('age', { required: true })} />
            {errors.age && <span>Введи свой возраст!</span>}

            <button>Начать игру</button>
        </Form>
    )
}
