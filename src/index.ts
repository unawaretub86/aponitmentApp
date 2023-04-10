import express from "express";
import appointments from "./routes/appointments";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/ping", (_, res) => {
  res.send("Pong hi there");
});

app.use("/api/appointments/", appointments);

app.listen(PORT);
console.log("API escuchando en el puerto " + PORT);
