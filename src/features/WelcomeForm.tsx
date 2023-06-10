import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    Text,
    NumberInput,
    FileButton,
    Stack,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfigContext, emptyConfig } from '../context/ConfigContext'
import { UserContext } from '../context/UserContext'

import type { Issue } from '../types'

export default function WelcomeForm() {
    const navigate = useNavigate()
    const [fileLoading, setFileLoading] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const resetRef = useRef<() => void>(null)
    const { user, setUser } = useContext(UserContext)
    const { config, setConfig } = useContext(ConfigContext)
    console.log(config)
    const form = useForm({
        initialValues: {
            name: user.name,
            age: user.age,
            soul: false,
            wantFile: false,
        },

        validate: {
            name: (value) => (value ? null : 'Введи имя'),
            age: (value) => (value ? null : 'Введи свой возраст'),
            soul: (value) => (value ? null : 'Ты должен продать душу'),
        },
    })

    const handleFileLoad = async (file: any) => {
        setFileLoading(true)
        setFile(file)
        const reader = new FileReader()
        reader.onload = function (e: any) {
            const config: Issue[] = JSON.parse(e.target.result)
            setConfig(config)
            setFileLoading(false)
        }
        reader.readAsText(file)
    }

    const clearFile = () => {
        setFile(null)
        setConfig(emptyConfig)
        resetRef.current?.()
    }

    useEffect(() => form.setValues(user), [user])

    return (
        <Box maw={300} mx="auto">
            <form
                onSubmit={form.onSubmit((values) => {
                    const { name, age } = values
                    setUser({ name, age })
                    navigate('/game')
                })}
            >
                <Stack>
                    <TextInput
                        withAsterisk
                        label="Имя"
                        placeholder="Твоё имя"
                        {...form.getInputProps('name')}
                    />

                    <NumberInput
                        withAsterisk
                        label="Возраст"
                        placeholder="Твой возраст"
                        {...form.getInputProps('age')}
                    />

                    <Checkbox
                        mt="md"
                        label="Я согласен(-а) продать свою душу"
                        {...form.getInputProps('soul', {
                            type: 'checkbox',
                        })}
                    />

                    <Checkbox
                        mt="md"
                        label="Хочешь загрузить свой конфиг? (.json)"
                        {...form.getInputProps('wantFile', {
                            type: 'checkbox',
                        })}
                    />

                    {form.values.wantFile && (
                        <>
                            <FileButton
                                onChange={handleFileLoad}
                                accept=".json"
                                resetRef={resetRef}
                            >
                                {(props) => <Button {...props}>Поиск</Button>}
                            </FileButton>
                            <Button
                                disabled={!file}
                                color="red"
                                onClick={clearFile}
                            >
                                Сбросить
                            </Button>
                            {file && (
                                <Text size="sm" align="center" mt="sm">
                                    Выбран файл: {file.name}
                                </Text>
                            )}
                        </>
                    )}

                    <Group position="right" mt="md">
                        <Button loading={fileLoading} type="submit">
                            {config?.length
                                ? 'Начать по твоему сценарию'
                                : 'Начать'}
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Box>
    )
}
