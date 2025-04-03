import { z } from "zod";

// This file defines the Person interface used in the application.
export const personSchema = z.object({
  name: z.string().nonempty(),
  favoriteFood: z.string().nonempty(),
  favoriteMovie: z.string().nonempty(),
  isActive: z.boolean(),
  dateAdded: z.date().optional(),
}).strict();

export type Person = z.infer<typeof personSchema>;