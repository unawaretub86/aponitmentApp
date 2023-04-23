export interface Person {
  name: string;
  surname: string;
  age: number;
  phone: number;
  document: number;
}

export interface Doctor {
  name: string;
  surname: string;
  specialty: Specialties;
  office: string;
  email: string;
}

export interface Appointment {
  specialty: Specialties;
  personDocument: number;
}

export type newDoctor = Doctor;
export type newPerson = Person;
export type newAppointment = Appointment;
