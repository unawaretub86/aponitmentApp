import { Specialties } from "./enums";
import { newPerson, newDoctor } from "./types";

export const toNewPerson = (object: any): newPerson => {
  const newRecord: newPerson = {
    name: verifyString(object.name),
    surname: verifyString(object.surname),
    age: isStringOrNumber(object.age),
    phone: isStringOrNumber(object.phone),
    document: isStringOrNumber(object.document),
  };

  return newRecord;
};

export const toNewDoctor = (object: any): newDoctor => {
  const newRecord: newDoctor = {
    name: verifyString(object.name),
    surname: verifyString(object.surname),
    specialty: parseSpecialty(object.specialty),
    email: verifyString(object.email),
    office: verifyString(object.office),
    age: isStringOrNumber(object.age),
    phone: isStringOrNumber(object.phone),
    document: isStringOrNumber(object.document),
  };

  return newRecord;
};

const verifySpecialty = (specialtyFromRequest: any): boolean => {
  return Object.values(Specialties).includes(specialtyFromRequest);
};

const parseSpecialty = (specialtyFromRequest: any): Specialties => {
  if (
    !verifyString(specialtyFromRequest) ||
    !verifySpecialty(specialtyFromRequest)
  ) {
    throw new Error("Incorrect or missing specialty");
  }

  return specialtyFromRequest;
};

const verifyString = (stringFromRequest: any): string => {
  if (typeof stringFromRequest !== "string") {
    throw new Error("Bad type string");
  }

  return stringFromRequest;
};

function isStringOrNumber(numberFromRequest: any): number {
  if (
    typeof numberFromRequest === "string" ||
    (typeof numberFromRequest !== "number" && isNaN(numberFromRequest))
  ) {
    throw new Error("Bad type number");
  }
  return numberFromRequest;
}
