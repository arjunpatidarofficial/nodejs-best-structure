const express = require("express");
const createError = require("http-errors");
const masterRouter = express.Router();
const {
  GetRoomList,
  GetCompanyList,
  GetChargesList,
} = require("../../controller");

masterRouter.get("/roomList", GetRoomList);

masterRouter.get("/chargesList", GetChargesList);

masterRouter.get("/companyList", GetCompanyList);

module.exports = masterRouter;
