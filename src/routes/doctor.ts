import express from "express";
import { toNewDoctor } from "../utils";
import { createDoctor, getDoctors } from "../services/Doctor";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const newDoctor = toNewDoctor(req.body);
    const createdDoctor = createDoctor(newDoctor);
    res.json(createdDoctor);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

router.get("/", (_, res) => {
  try {
    res.json(getDoctors);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

export default router;
