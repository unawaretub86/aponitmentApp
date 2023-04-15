import express from "express";
import { engine } from "express-handlebars";
import doctor from "./routes/doctor";
import person from "./routes/person";
import specialty from "./routes/specialty";
import appointment from "./routes/appointment";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/ping", (_, res) => {
  res.send("Pong hi there");
});

app.set("views", __dirname + "/views");
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.listen(PORT);

// app.use("/api/createDoctor", doctor);
app.use("/", doctor);
app.use("/api/appointments/person", person);
app.use("/api/appointments/specialty", specialty);
app.use("/api/appointments", appointment);
