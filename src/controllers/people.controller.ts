import { Request, Response } from "express";
import { Person } from "../model/person.model";
import { people } from "../data/people.database";
import { sortPeople } from "../utils/sort.utils";

// Get all people
export const getAllPeople = (req: Request, res: Response) => {
  const sortBy = req.query.sortBy as keyof Person || undefined;
  const order = req.query.order as string || "asc"; // Default order is ascending

  // Check if the sortBy parameter is provided
  // If not, return the people array without sorting
  if (!sortBy) {
    res.json(people);
    return;
  }


  // Array.from(people) is used to create a shallow copy of the people array
  // This is important to avoid mutating the original array when sorting
  // Sort the copy using the utility function
  const peopleSorted = sortPeople(Array.from(people), sortBy, order);

  res.json(peopleSorted);
};

// Update all records with the current date
export const updatePeopleDate = (req: Request, res: Response) => {
  people.forEach((person) => {
    person.dateAdded = new Date();
  });
  res.status(204).json(); // No content response
};

// Get active records
export const getActivePeople = (req: Request, res: Response) => {
  // Filter active records
  const activeRecords = Array.from(people.filter((person) => person.isActive)); 

  if (activeRecords.length === 0) {
    res.status(404).json({ message: "No active records found." });
    return;
  }

  const sortBy = req.query.sortBy as keyof Person || undefined;
  const order = req.query.order as string || "asc"; // Default order is ascending

  // Check if the sortBy parameter is provided
  // If not, return the active records without sorting
  if (!sortBy) {
    res.json(activeRecords);
    return;
  }

  // Sort the active records using the utility function
  sortPeople(activeRecords, sortBy, order);

  res.json(activeRecords);
};

// Add a new person
export const addPerson = (req: Request, res: Response) => {
  const newPerson: Person = req.body;
  newPerson.dateAdded =  new Date();
  people.push(newPerson);
  res.status(201).json({ message: "Person added successfully.", newPerson });
};
