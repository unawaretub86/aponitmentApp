export type Specialties =
  | "Medicina general"
  | "Cardiología"
  | "Medicina interna"
  | "Dermatología"
  | "Rehabilitación física"
  | "Psicología"
  | "Odontología"
  | "Radiología";

export interface Person {
  name: string;
  surname: string;
  age: int;
  phone: number;
  document: number;
}

interface Doctor extends Person {
  specialty: Specialties;
  office: number;
  email: string;
}

export type newPerson = Person;
