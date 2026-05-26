const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://mongodb-service:27017/fluiddb";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "Fluid AI DevOps Challenge"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy."
  });
});

app.get("/orders", (req, res) => {
  res.json([
    { id: 101, item: "Laptop" },
    { id: 102, item: "Phone" }
  ]);
});

app.listen(3001, () =>
  console.log("Order service running on port 3001")
);