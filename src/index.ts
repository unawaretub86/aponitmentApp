import express from "express";
import doctor from "./routes/doctor";
import person from "./routes/person";
import specialty from "./routes/specialty";
import appointment from "./routes/appointment";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/ping", (_, res) => {
  res.send("Pong hi there");
});

app.use(cors());

app.use("/api/appointments/doctor", doctor);
app.use("/api/appointments/person", person);
app.use("/api/appointments/specialty", specialty);
app.use("/api/appointments", appointment);

app.listen(PORT);
console.log("API escuchando en el puerto " + PORT);
