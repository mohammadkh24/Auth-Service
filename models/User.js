const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      enum: ["ADMIN", "USER"],
      default: ["USER"],
    },
  },
  { timestamps: true }
);

const model = mongoose.model("User", userSchema);

module.exports = model;
