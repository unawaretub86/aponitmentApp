import { newAppointment } from "../entitites/types";
import pool from "../scripts/postgres";

export const createAppointment = (newAppointment: newAppointment) => {
  let query = {
    text: "INSERT INTO public.appointments (specialty, person_document) VALUES($1, $2)",
    values: [newAppointment.specialty, newAppointment.personDocument],
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
    text: `SELECT person.*, appointments.specialty ,
appointments.person_document,
appointments.created_at 
FROM appointments
INNER JOIN person ON appointments.person_document  = person.document
WHERE person_document  = $1
`,
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
    text: `SELECT * FROM appointments`,
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};
