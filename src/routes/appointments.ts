import express from "express";
import { createPerson } from "../services/Person";
import { toNewPerson, toNewDoctor } from "../utils";
import createDoctor from "../services/Doctor";

const router = express.Router();

router.post("/createPerson", (req, res) => {
  try {
    const newPerson = toNewPerson(req.body);
    const createdPerson = createPerson(newPerson);
    res.json(createdPerson);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

router.post("/createDoctor", (req, res) => {
  try {
    const newDoctor = toNewDoctor(req.body);
    const createdDoctor = createDoctor(newDoctor);
    res.json(createdDoctor);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

export default router;
