import express from "express";
import { getSpecialty } from "../services/Specialty";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const doctors = await getSpecialty();

    res.json(doctors);
  } catch (e) {
    res.status(400).json({ message: "" });
  }
});
export default router;
