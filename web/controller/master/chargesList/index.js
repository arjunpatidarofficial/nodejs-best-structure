const { ChargeList, CompanyList } = require("../../../../models/mongoose");
const createError = require("http-errors");
const firebaseDb = require("../../../../helpers/connection");

const GetChargesList = async (req, res, next) => {
  try {
    const chargesList = await firebaseDb.collection("chargemaster").get();
    chargesList.forEach(async (doc) => {
      CompanyList.findOne({ name: doc.id }).then((company) => {
        const newChargeslist = [];
        doc.data().chargelist.map((charges) => {
          newChargeslist.push({
            key: charges.Key,
            label: charges.label,
          });
        });

        console.log(newChargeslist);

        const result = {
          companyId: company._id,
          chargesList: newChargeslist,
          insuranceCompany: doc.id,
        };
        //  console.log("Insurance company :- ", doc.id);
        const chargelist1 = new ChargeList(result);
        const savedChargeList = chargelist1.save();
      });

      //   console.log(doc.data().chargelist);
    });
    res.send(chargesList);
  } catch (error) {
    if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = GetChargesList;
