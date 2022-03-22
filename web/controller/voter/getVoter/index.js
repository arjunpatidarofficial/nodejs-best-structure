const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetVoter = async (req, res, next) => {
  try {
    const voterList = await Voter.find();

    res.send(voterList);
  } catch (error) {
    // if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = GetVoter;
