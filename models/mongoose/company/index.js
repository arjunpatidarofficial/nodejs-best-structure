const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    state: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const CompanyList = mongoose.model("insurance_tpa_master", companySchema);

module.exports = CompanyList;
