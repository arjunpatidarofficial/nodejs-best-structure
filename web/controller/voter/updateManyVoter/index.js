const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const UpdateManyVoter = async (req, res, next) => {
  try {
    const voter = await Voter.updateMany(
      { age: { $gt: "16" } },
      {
        proUser: true,
      }
    );
    if (!voter) {
      res.send({
        message: "Voter not exist",
      });
    }
    res.send(voter);
  } catch (error) {
    // if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = UpdateManyVoter;
