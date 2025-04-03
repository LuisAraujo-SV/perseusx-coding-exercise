import { Request, Response } from "express";
import { Person } from "../model/person.model";
import { people } from "../data/people.database";

// Get all people
export const getAllPeople = (req: Request, res: Response) => {
  const sortBy = req.query.sortBy as keyof Person || undefined; // Default no sorting
  const order = req.query.order as string || "asc"; // Default order is ascending

  // Check if the sortBy parameter is provided
  if (!sortBy) {
    res.json(people);
    return;
  }
  
  // Create a shallow copy of the array to avoid mutating the original
  const peopleSorted = Array.from(people); 
  
  // Sort the people array based on the sortBy parameter and order
  peopleSorted.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return order === "asc" ? -1 : 1;
    if (a[sortBy]! > b[sortBy]!) return order === "asc" ? 1 : -1;
    return 0;
  });

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
  // Create a shallow copy of the array to avoid mutating the original
  const activeRecords = Array.from(people.filter((person) => person.isActive)); 

  if (activeRecords.length === 0) {
    res.status(404).json({ message: "No active records found." });
    return;
  }

  const sortBy = req.query.sortBy as keyof Person || undefined; // Default no sorting
  const order = req.query.order as string || "asc"; // Default order is ascending

  // Check if the sortBy parameter is provided
  if (!sortBy) {
    res.json(activeRecords);
    return;
  }
  
  // Sort the people array based on the sortBy parameter and order
  activeRecords.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return order === "asc" ? -1 : 1;
    if (a[sortBy]! > b[sortBy]!) return order === "asc" ? 1 : -1;
    return 0;
  });

  res.json(activeRecords);
};

// Add a new person
export const addPerson = (req: Request, res: Response) => {
  const newPerson: Person = req.body;
  newPerson.dateAdded =  new Date();
  people.push(newPerson);
  res.status(201).json({ message: "Person added successfully.", newPerson });
};
