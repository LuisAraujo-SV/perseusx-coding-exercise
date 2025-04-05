import { Request, Response } from "express";
import { Person } from "../model/person.model";
import { peopleService } from "../services/people.service";

// Get all people
export const getAllPeople = (req: Request, res: Response) => {
  const sortBy = req.query.sortBy as keyof Person || undefined;
  const order = req.query.order as string || "asc"; // Default order is ascending

  const peopleSorted = peopleService.getAllPeople(sortBy, order);
  res.json(peopleSorted);
};

// Update all records with the current date
export const updatePeopleDate = (req: Request, res: Response) => {
  peopleService.updatePeopleDate();
  res.status(204).json(); // No content response
};

// Get active records
export const getActivePeople = (req: Request, res: Response) => {
  const sortBy = req.query.sortBy as keyof Person || undefined;
  const order = req.query.order as string || "asc"; // Default order is ascending

  const activeRecords = peopleService.getActivePeople(sortBy, order);

  if (activeRecords.length === 0) {
    res.status(404).json({ message: "No active records found." });
    return;
  }

  res.json(activeRecords);
};

// Add a new person
export const addPerson = (req: Request, res: Response) => {
  const newPerson: Person = req.body;
  const addedPerson = peopleService.addPerson(newPerson);
  res.status(201).json({ message: "Person added successfully.", newPerson: addedPerson });
};
