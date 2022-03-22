const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const DeleteOneVoter = async (req, res, next) => {
  try {
    if (!req.body.name) {
      res.send({
        message: "Name required",
      });
    }

    const voter = await Voter.deleteOne({ name: req.body.name });
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

module.exports = DeleteOneVoter;
