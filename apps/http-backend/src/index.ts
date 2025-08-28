import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res) => {});

app.post("/signin", (req, res) => {
  const userId = 1;

  const token = jwt.sign({ userId }, JWT_SECRET);
  res.send({ token });
});

app.post("/room", middleware, (req, res) => {
  res.json({
    roomId: 1223,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
