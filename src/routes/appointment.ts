import express from "express";
import { toAppointment } from "../utils";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentByPersonDocument,
} from "../services/Appointment";

const router = express.Router();

router.post("/create", (req, res) => {
  try {
    const newAppointment = toAppointment(req.body);
    const createdAppointment = createAppointment(newAppointment);
    res.status(200).json({ appointment: createdAppointment });
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

router.get("/getByDocument/:document", async (req, res) => {
  try {
    const appointments = await getAppointmentByPersonDocument(
      req.params.document
    );

    res.json(appointments);
  } catch (e) {
    res.status(400).json({ message: "e.message" });
  }
});

router.get("/getAll", async (_, res) => {
  try {
    const appointments = await getAllAppointments();

    res.json(appointments);
  } catch (e) {
    res.status(400).json({ message: "e.message" });
  }
});

export default router;
