const express = require("express");
const {
  CreateVoter,
  GetVoter,
  GetByIdVoter,
  GetByIdAndDeleteVoter,
  GetByIdAndRemoveVoter,
  GetByIdAndUpdateVoter,
  DeleteOneVoter,
  DeleteManyVoter,
  GetFindOneVoter,
  GetOneAndDeleteVoter,
  GetOneAndRemoveVoter,
  GetOneAndReplaceVoter,
  GetOneAndUpdateVoter,
  ReplaceOneVoter,
  UpdateManyVoter,
  UpdateOneVoter,
} = require("../../controller");
const voterRouter = express.Router();

// Create new voter
voterRouter.post("/createVoter", CreateVoter);

// get all voter data
voterRouter.get("/getVoter", GetVoter);

// get voter find by ID
// url http://localhost:9000/voter/getByIdVoter?id=62399ee604ce2355c0a51b0e
voterRouter.get("/getByIdVoter", GetByIdVoter);

// get voter find by any field
// url http://localhost:9000/voter/getFindOneVoter?name=Ritvik Shiv
voterRouter.get("/getFindOneVoter", GetFindOneVoter);

// update voter data by ID
voterRouter.put("/getByIdAndUpdateVoter", GetByIdAndUpdateVoter);

// find one document by any field and update document
voterRouter.put("/getOneAndUpdateVoter", GetOneAndUpdateVoter);

// update many document
voterRouter.put("/updateManyVoter", UpdateManyVoter);

// find one document by any field and update document
voterRouter.put("/updateOneVoter", UpdateOneVoter);

// find one document by any field and replace field value
voterRouter.put("/getOneAndReplaceVoter", GetOneAndReplaceVoter);

// find one document by any field and replace document
voterRouter.put("/replaceOneVoter", ReplaceOneVoter);

// delete voter data by ID
voterRouter.delete("/getByIdAndDeleteVoter", GetByIdAndDeleteVoter);

// delete voter data by any field
voterRouter.delete("/getOneAndDeleteVoter", GetOneAndDeleteVoter);

// delete voter data by any field
voterRouter.delete("/deleteOneVoter", DeleteOneVoter);

voterRouter.delete("/deleteManyVoter", DeleteManyVoter);

voterRouter.delete("/getByIdAndRemoveVoter", GetByIdAndRemoveVoter);

voterRouter.delete("/getOneAndRemoveVoter", GetOneAndRemoveVoter);

module.exports = voterRouter;
