const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomListSchema = new Schema(
  {
    companyId: {
      type: String,
      required: true,
      unique: true,
    },
    roomList: {
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

const RoomList = mongoose.model("room_master", roomListSchema);

module.exports = RoomList;
