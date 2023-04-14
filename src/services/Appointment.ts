// import { Person } from "../types";
import { newAppointment } from "../entitites/types";
import pool from "../scripts/postgres";

export const createAppointment = (newAppointment: newAppointment) => {
  let query = {
    text: "INSERT INTO public.appointments (person_id, doctor_id, specialty_id) VALUES($1, $2, $3)",
    values: [
      newAppointment.personId,
      newAppointment.doctorId,
      newAppointment.specialtyId,
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
