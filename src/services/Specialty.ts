// import { Person } from "../types";
import pool from "../scripts/postgres";

export const getSpecialty = async () => {
  let query = {
    text: "SELECT * FROM public.specialty",
  };

  try {
    const data = await pool.query(query);
    return data.rows;
  } catch (e) {
    return "Something went wrong";
  }
};
