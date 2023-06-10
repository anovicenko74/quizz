import type { Variant } from './types'

export type Issue = {
    task: string
    variants: Variant[]
}

export const issues: Issue[] = [
    {
        task: '7 + _ = 13',
        variants: [
            {
                value: 1,
            },
            {
                value: 5,
            },
            {
                value: 6,
                right: true,
            },

            {
                value: 8,
            },
        ],
    },
    {
        task: '2 * _ = 36',
        variants: [
            {
                value: 6,
            },
            {
                value: 18,
                right: true,
            },
            {
                value: 19,
            },
            {
                value: 16,
            },
        ],
    },
    {
        task: '315 / _ = 63',
        variants: [
            {
                value: 7,
            },
            {
                value: 3,
            },
            {
                value: 5,
                right: true,
            },

            {
                value: 9,
            },
        ],
    },
    {
        task: '107 + _ = 13',
        variants: [
            {
                value: -97,
            },
            {
                value: 96,
            },
            {
                value: -96,
            },
            {
                value: -94,
                right: true,
            },
        ],
    },
]
