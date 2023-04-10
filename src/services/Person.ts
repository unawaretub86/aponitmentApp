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

export default createPerson;
