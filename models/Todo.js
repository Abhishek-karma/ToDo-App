const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true, 
      },
      desc: {
        type: String,
        default: "", // Optional: Add a default value if you want it to always exist
      },
    },
    {
      timestamps: true, 
    }
  );
  
  const Todo = mongoose.model("Todo", todoSchema);

  module.exports = Todo;