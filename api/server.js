const express = require("express");
const app = express();
const mongoose = require("mongoose");
const api = require("../api/routes/todo");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
  } catch (e) {
    console.log("database connection error");
  }
};

//connecting to db

connect();

//using express.json() middleware to read json data
app.use(express.json());
//api middleware to handle routes
app.use("/todo", api);

app.listen(5000, (req, res) => {
  console.log("listening on port 5000");
});
