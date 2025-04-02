import { Person } from "../model/person.model";

// the in-memory database for the people records
// This is a simple array of objects, but in a real application, this would be replaced with a database connection.
export const people: Person[] = [
  { name: "Alice", favoriteMovie: "Inception", favoriteFood: "Pizza", isActive: true },
  { name: "Bob", favoriteMovie: "The Matrix", favoriteFood: "Burgers", isActive: false },
  { name: "Charlie", favoriteMovie: "Interstellar", favoriteFood: "Pasta", isActive: true },
  { name: "Luis Araujo", favoriteMovie: "World War Z", favoriteFood: "Steak", isActive: true }, // Myself
  { name: "Rocky", favoriteMovie: "Back to The Future", favoriteFood: "Sushi", isActive: false },
  { name: "Miroslav", favoriteMovie: "American Psycho", favoriteFood: "Sushi", isActive: true },
  { name: "Donny", favoriteMovie: "The Princess Bride", favoriteFood: "Singapore chow mei fun", isActive: false },
  { name: "Matt", favoriteMovie: "The Princess Bride", favoriteFood: "Tacos", isActive: true },
];