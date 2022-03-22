const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const UpdateOneVoter = async (req, res, next) => {
  try {
    const voter = await Voter.updateOne(
      { name: req.body.name },
      { email: req.body.email }
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

module.exports = UpdateOneVoter;
