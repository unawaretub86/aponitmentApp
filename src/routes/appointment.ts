import express from "express";
import { toAppointment } from "../utils";
import { createAppointment } from "../services/Appointment";

const router = express.Router();

router.post("/create", (req, res) => {
  try {
    const newAppointment = toAppointment(req.body);
    const createdAppointment = createAppointment(newAppointment);
    res.json(createdAppointment);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

export default router;
