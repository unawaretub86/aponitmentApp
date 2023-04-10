import express from "express";
import appointmentService from "../services/appointmentService";
// import toNewPerson from "../utils";

const router = express.Router();

router.get("/", (_, res) => {
  res.send("fetch data");
});

router.post("/", (req, res) => {
  try {
    const { name, surname, age, phone, document } = req.body;
    // const newPerson = toNewPerson(req.body);
    const createdPerson = appointmentService({
      name,
      surname,
      age,
      phone,
      document,
    });

    res.json(createdPerson);
  } catch (e) {
    res.status(400).send(e);
  }
});

export default router;
