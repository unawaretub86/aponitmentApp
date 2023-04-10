import { newPerson } from "./types";

const toNewPerson = (object: any): newPerson => {
  const newRecord: newPerson = {
    name: verifyString(object.name),
    surname: verifyString(object.surname),
    age: isStringOrNumber(object.age),
    phone: isStringOrNumber(object.phone),
    document: isStringOrNumber(object.document),
  };

  return newRecord;
};

const verifyString = (stringFromRequest: any): string => {
  if (typeof stringFromRequest !== "string") {
    throw new Error("Bad type");
  }

  return stringFromRequest;
};

function isStringOrNumber(numberFromRequest: any): number {
  if (
    typeof numberFromRequest === "string" ||
    (typeof numberFromRequest !== "number" && isNaN(numberFromRequest))
  ) {
    throw new Error("Bad type");
  }
  return numberFromRequest;
}

export default toNewPerson;
