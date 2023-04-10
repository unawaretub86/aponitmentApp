// import { Person } from "../types";
import pool from "../scripts/postgres";
import { newDoctor } from "../types";

export const createDoctor = (newDoctor: newDoctor) => {
  let query = {
    text: 'INSERT INTO public.doctor ("name", surname, office, email, specialty, document, age, phone) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    values: [
      newDoctor.name,
      newDoctor.surname,
      newDoctor.office,
      newDoctor.email,
      newDoctor.specialty,
      newDoctor.document,
      newDoctor.age,
      newDoctor.phone,
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

export const getDoctors = () => {
  let query = {
    text: "SELECT * FROM public.doctor",
  };

  return pool
    .query(query)
    .then((data) => data.rows)
    .catch((e) => e.json("Something went"));
};

//Property 'then' does not exist on type 'void'.
