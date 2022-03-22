const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chargesListSchema = new Schema(
  {
    companyId: {
      type: String,
      required: true,
      unique: true,
    },
    chargesList: {
      type: Array,
      required: true,
    },
    insuranceCompany: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const ChargesList = mongoose.model("charges_master", chargesListSchema);

module.exports = ChargesList;
