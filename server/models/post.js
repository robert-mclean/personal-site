const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Post", userSchema);
