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

export interface Appointment {
  personId: number;
  doctorId: number;
  specialtyId: number;
}

export type newDoctor = Doctor;
export type newPerson = Person;
export type newAppointment = Appointment;
