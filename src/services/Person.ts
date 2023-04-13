// import { Person } from "../types";
import pool from "../scripts/postgres";
import { newPerson } from "../types";

export const createPerson = (newPerson: newPerson) => {
  let query = {
    text: 'INSERT INTO public.person ("name", surname, "document", age, phone) VALUES($1, $2, $3, $4, $5)',
    values: [
      newPerson.name,
      newPerson.surname,
      newPerson.document,
      newPerson.age,
      newPerson.phone,
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

export const getPersons = async () => {
  let query = {
    text: "SELECT * FROM public.person",
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};
