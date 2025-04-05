import { z } from "zod";

// This file defines the Person interface used in the application.
export const personSchema = z.object({
  name: z.string().nonempty().regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  favoriteFood: z.string().nonempty().regex(/^[a-zA-Z\s]+$/, "Favorite food must contain only letters and spaces"),
  favoriteMovie: z.string().nonempty().regex(/^[a-zA-Z0-9\s!?,.~\-@#$&*()]+$/, "Favorite movie must contain only letters, numbers, spaces, and permitted special characters (! ? , - @ # $ & * ( ))"),
  isActive: z.boolean(),
  dateAdded: z.date().optional(),
}).strict();

export type Person = z.infer<typeof personSchema>;