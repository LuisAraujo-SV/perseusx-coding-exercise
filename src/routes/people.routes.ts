import { Router } from "express";
import {
  getAllPeople,
  updatePeopleDate,
  getActivePeople,
  addPerson,
} from "../controllers/people.controller";
import { validate, validateQuery } from "../middleware/validate.middleware";
import { personSchema } from "../model/person.model";
import { queryParamSchema } from "../dto/queryParam.dto"; 

const router = Router();

// Import the necessary modules and functions
router.get("/", validateQuery(queryParamSchema), getAllPeople);
router.patch("/update-date", updatePeopleDate);
router.get("/active", validateQuery(queryParamSchema), getActivePeople);
router.post("/", validate(personSchema), addPerson);

export default router;
