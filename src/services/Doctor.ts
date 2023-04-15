// import { Person } from "../types";
import pool from "../scripts/postgres";
import { newDoctor } from "../entitites/types";

export const createDoctor = (newDoctor: newDoctor) => {
  let query = {
    text: "INSERT INTO public.doctor (name, surname, specialty, email, office) VALUES($1, $2, $3, $4, $5)",
    values: [
      newDoctor.name,
      newDoctor.surname,
      newDoctor.specialty,
      newDoctor.email,
      newDoctor.office,
    ],
  };

  pool.query(query, (err, res) => {
    if (err) {
      return err.stack;
    }
    return res;
  });
};

export const getDoctors = async () => {
  let query = {
    text: "SELECT * FROM public.doctor",
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};
