const { RoomList, CompanyList } = require("../../../../models/mongoose");
const createError = require("http-errors");
const firebaseDb = require("../../../../helpers/connection");

const GetCompanyList = async (req, res, next) => {
  try {
    const companyList = await firebaseDb
      .collection("InsuranceCompany_or_TPA")
      .get();
    companyList.forEach(async (doc) => {
      //  console.log(doc.data());
      const result = {
        insuranceCompany: doc.id,
        name: doc.data().name,
        phone: doc.data().phone,
        image: doc.data().image,
        email: doc.data().email,
        type: doc.data().type,
        pinCode: doc.data().pin_code,
        city: doc.data().city,
        address: doc.data().address,
        state: doc.data().state,
      };
      //console.log("Result:- ", result);
      const companyList1 = new CompanyList(result);
      const savedcompanyList = await companyList1.save();
      // console.log(doc.data().roomlist);
    });
    res.send(companyList);
  } catch (error) {
    if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = GetCompanyList;
