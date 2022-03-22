const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetByIdVoter = async (req, res, next) => {
  try {
    const voter = await Voter.findById({ _id: req.query.id });
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

module.exports = GetByIdVoter;
