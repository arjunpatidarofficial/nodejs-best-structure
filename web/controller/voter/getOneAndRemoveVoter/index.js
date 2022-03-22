const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetOneAndRemoveVoter = async (req, res, next) => {
  try {
    const voter = await Voter.findOneAndRemove({ name: req.body.name });
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

module.exports = GetOneAndRemoveVoter;
