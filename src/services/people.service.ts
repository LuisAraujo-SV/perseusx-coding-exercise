import { Person } from "../model/person.model";
import { people } from "../data/people.database";
import { sortPeople } from "../utils/sort.utils";

class PeopleService {
  getAllPeople(sortBy?: keyof Person, order: string = "asc"): Person[] {
    if (!sortBy) {
      return people;
    }
    return sortPeople([...people], sortBy, order);
  }

  updatePeopleDate(): void {
    people.forEach((person) => {
      person.dateAdded = new Date();
    });
  }

  getActivePeople(sortBy?: keyof Person, order: string = "asc"): Person[] {
    const activeRecords = people.filter((person) => person.isActive);
    if (!sortBy) {
      return activeRecords;
    }
    return sortPeople(activeRecords, sortBy, order);
  }

  addPerson(newPerson: Person): Person {
    newPerson.dateAdded = new Date();
    people.push(newPerson);
    return newPerson;
  }
}

export const peopleService = new PeopleService();