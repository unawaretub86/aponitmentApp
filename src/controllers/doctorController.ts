import { getDoctors } from "../services/Doctor";

export const index = async (_, res) => {
  const doctors = await getDoctors();
  res.render("doctor/index", { doctors });
};

export function create(_, res) {
  res.render("doctor/create");
}
