import express from "express";
import { createPerson } from "../services/Person";
import { toNewPerson } from "../utils";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const newPerson = toNewPerson(req.body);
    const createdPerson = createPerson(newPerson);
    res.json(createdPerson);
  } catch (e) {
    res.status(400).json({ message: e + "" });
  }
});

export default router;
