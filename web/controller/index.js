const { Login, Logout, RefreshToken, Register } = require("./auth");
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
} = require("./voter");

const { GetRoomList, GetCompanyList, GetChargesList } = require("./master");

module.exports = {
  // auth controller
  Login,
  Logout,
  RefreshToken,
  Register,

  // voter controller
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

  // Master controller
  GetRoomList,
  GetCompanyList,
  GetChargesList,
};
