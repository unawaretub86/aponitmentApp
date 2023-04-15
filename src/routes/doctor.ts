import express from "express";
import { toNewDoctor } from "../utils";
import { createDoctor } from "../services/Doctor";
import { index } from "../controllers/doctorController";

const router = express.Router();

router.post("/create", (req, res) => {
  try {
    const newDoctor = toNewDoctor(req.body);
    const createdDoctor = createDoctor(newDoctor);
    res.json(createdDoctor);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

router.get("/doctor", index);

export default router;
