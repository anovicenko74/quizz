import { z } from 'zod'

export const VariantSchema = z.object({
    value: z.union([z.string(), z.number()]),
    right: z.boolean().optional(),
})

export const IssueSchema = z.object({
    task: z.string(),
    variants: VariantSchema.array(),
})
