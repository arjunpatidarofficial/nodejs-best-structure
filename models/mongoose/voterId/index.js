const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    proUser: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Voter = mongoose.model("voters", VoterSchema);

module.exports = Voter;
