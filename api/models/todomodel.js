const mongoose = require("mongoose");
const { Schema } = mongoose;

// creating schema fot todo list
const todoSchema = new Schema({
  item: String,
  title: String,
  status: {
    type: Boolean,
    default: false,
  },
});
//expoting model 
module.exports = mongoose.model("todo", todoSchema);
