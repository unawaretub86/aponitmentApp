export interface Person {
  name: string;
  surname: string;
  age: number;
  phone: number;
  document: number;
}

export interface Doctor extends Person {
  specialty: Specialties;
  office: string;
  email: string;
}

export type newDoctor = Doctor;
export type newPerson = Person;
