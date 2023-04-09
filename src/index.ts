import express from "express";
const app = express();
app.use(express.json());

// const PORT = process.env.PORT;

const PORT = 8080;

app.get("/ping", (_, res) => {
  res.send("Pong");
});

app.listen(PORT);
console.log("API escuchando en el puerto " + PORT);
