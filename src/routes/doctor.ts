import express from "express";
import { toNewDoctor } from "../utils";
import { createDoctor, getDoctors } from "../services/Doctor";

const router = express.Router();

router.post("/create", (req, res) => {
  try {
    const newDoctor = toNewDoctor(req.body);
    const createdDoctor = createDoctor(newDoctor);
    res.status(200).json({ doctor: createdDoctor });
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

router.get("/", async (_, res) => {
  try {
    const doctors = await getDoctors();

    res.json(doctors);
  } catch (e) {
    res.status(400).json({ message: "e.message" });
  }
});
export default router;
