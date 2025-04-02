import { Router } from "express";
import {
  getAllPeople,
  updatePeopleDate,
  getActivePeople,
  addPerson,
} from "../controllers/people.controller";

const router = Router();

// Import the necessary modules and functions
router.get("/", getAllPeople);
router.post("/update-date", updatePeopleDate);
router.get("/active", getActivePeople);
router.post("/", addPerson);

export default router;
