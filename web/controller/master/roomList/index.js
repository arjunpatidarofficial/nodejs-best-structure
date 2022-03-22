const { RoomList, CompanyList } = require("../../../../models/mongoose");
const createError = require("http-errors");
const firebaseDb = require("../../../../helpers/connection");

const GetRoomList = async (req, res, next) => {
  try {
    const roomList = await firebaseDb.collection("Room_master").get();
    roomList.forEach(async (doc) => {
      CompanyList.findOne({ name: doc.id }).then((company) => {
        console.log(company);

        const result = {
          companyId: company._id,
          roomList: doc.data().roomlist,
          insuranceCompany: doc.id,
        };

        const roomList1 = new RoomList(result);
        const savedRoomList = roomList1.save();
      });
    });
    res.send(roomList);
  } catch (error) {
    if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = GetRoomList;
