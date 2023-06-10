export type Variant = {
    value: string | number
    right?: boolean
}

export type User = {
    name: string
    age: number
}

export type Issue = {
    task: string
    variants: Variant[]
}
