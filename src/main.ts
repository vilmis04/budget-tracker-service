import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

console.log("Listening on port 8000");
app.listen(8000);
