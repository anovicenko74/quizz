import type { ConfigSchema, IssueSchema, VariantSchema } from './schemas'
import type { z } from 'zod'

export type Variant = z.infer<typeof VariantSchema>
export type Issue = z.infer<typeof IssueSchema>
export type Config = z.infer<typeof ConfigSchema>
export type User = {
    name: string
    age: number
}
