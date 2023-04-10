export enum Specialties {
  Medicina_general = "Medicina general",
  Cardiología = "Cardiología",
  Medicina_interna = "Medicina interna",
  Dermatología = "Dermatología",
  Rehabilitación_física = "Rehabilitación física",
  Psicología = "Psicología",
  Odontología = "Odontología",
  Radiología = "Radiología",
}

export interface Person {
  name: string;
  surname: string;
  age: int;
  phone: number;
  document: number;
}

interface Doctor extends Person {
  specialty: Specialties;
  office: string;
  email: string;
}

export type newPerson = Person;
export type newDoctor = Doctor;
