const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetFindOneVoter = async (req, res, next) => {
  try {
    const voter = await Voter.findOne({ name: req.query.name });
    if (!voter) {
      res.send({
        message: "Voter not exist",
      });
      next();
    }
    res.send(voter);
  } catch (error) {
    // if (error.isJoi === true) error.status = 442;
    next(error);
  }
};

module.exports = GetFindOneVoter;
