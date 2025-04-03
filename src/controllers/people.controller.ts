import { Request, Response } from "express";
import { Person } from "../model/person.model";
import { people } from "../data/people.database";

// Get all people
export const getAllPeople = (req: Request, res: Response) => {
  const sortBy = req.query.sortBy as keyof Person || undefined; // Default no sorting

  // Check if the sortBy parameter is provided
  if (!sortBy) {
    res.json(people);
    return;
  }

  // Validate the sortBy parameter
  if (!["name", "favoriteFood", "favoriteMovie", "isActive"].includes(sortBy)) {
    res.status(400).json({ message: "Invalid sortBy parameter." });
    return;
  }
  
  // Create a shallow copy of the array to avoid mutating the original
  const peopleSorted = Array.from(people); 
  
  // Sort the people array based on the sortBy paramete
  peopleSorted.sort((a, b) => {
    if (a[sortBy]! < b[sortBy]!) return -1;
    if (a[sortBy]! > b[sortBy]!) return 1;
    return 0;
  });

  res.json(peopleSorted);
};

// Update all records with the current date
export const updatePeopleDate = (req: Request, res: Response) => {
  people.forEach((person) => {
    person.dateAdded = new Date();
  });
  res.json({ message: "Records updated with the current date.", people });
};

// Get active records, optionally sorted by a property
export const getActivePeople = (req: Request, res: Response) => {
  const activeRecords = people.filter((person) => person.isActive);

  if (activeRecords.length === 0) {
    res.status(404).json({ message: "No active records found." });
    return;
  }

  res.json(activeRecords);
};

// Add a new person
export const addPerson = (req: Request, res: Response) => {
  const newPerson: Person = req.body;
  newPerson.dateAdded =  new Date(); // D/M/YYYY format
  people.push(newPerson);
  res.status(201).json({ message: "Person added successfully.", newPerson });
};
