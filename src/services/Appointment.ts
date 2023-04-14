import { newAppointment } from "../entitites/types";
import pool from "../scripts/postgres";

export const createAppointment = (newAppointment: newAppointment) => {
  let query = {
    text: "INSERT INTO public.appointments (person_id, doctor_id, specialty_id, person_document) VALUES($1, $2, $3, $4)",
    values: [
      newAppointment.personId,
      newAppointment.doctorId,
      newAppointment.specialtyId,
      newAppointment.personDocument,
    ],
  };

  pool.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return err.stack;
    }
    return res;
  });
};

export const getAppointmentByPersonDocument = async (document: string) => {
  let query = {
    text: `SELECT person.id as person, doctor.name, doctor.surname, doctor.office, doctor.specialty
FROM appointments
INNER JOIN doctor ON appointments.doctor_id = doctor.id
INNER JOIN person ON appointments.person_id = person.id
INNER JOIN specialty ON appointments.specialty_id = specialty.id
WHERE person_document  = $1`,
    values: [document],
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};

export const getAllAppointments = async () => {
  let query = {
    text: `SELECT person.id as person, doctor.name, doctor.surname, doctor.office, doctor.specialty
FROM appointments
INNER JOIN doctor ON appointments.doctor_id = doctor.id
INNER JOIN person ON appointments.person_id = person.id
INNER JOIN specialty ON appointments.specialty_id = specialty.id`,
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};
