const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },

  isPrivate: {
    type: Boolean,
    required: true
  },

  blogs: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog"
      }
    ],
    validate: [arrayLimit, "{PATH} exceeds the limit of 5"]
  }
});

function arrayLimit(val) {
  return val.length <= 5;
}

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
