import { Person } from "../model/person.model";

/**
 * Utility function to sort an array of people by a given property and order.
 * @param people - Array of people to sort.
 * @param sortBy - The property to sort by.
 * @param order - The order of sorting: "asc" for ascending, "desc" for descending.
 * @returns The sorted array of people.
 */
export const sortPeople = (people: Person[], sortBy: keyof Person, order: string): Person[] => {
  return people.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return order === "asc" ? -1 : 1;
    if (a[sortBy]! > b[sortBy]!) return order === "asc" ? 1 : -1;
    return 0;
  });
};