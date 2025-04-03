import { z } from 'zod';

export const queryParamSchema = z.object({
    sortBy: z.enum(['name', 'favoriteFood', 'favoriteMovie', 'isActive']).optional(),
    order: z.enum(['asc', 'desc']).optional(),
}).strict();

export type QueryParam = z.infer<typeof queryParamSchema>;