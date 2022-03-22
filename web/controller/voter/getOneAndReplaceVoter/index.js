const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetOneAndReplaceVoter = async (req, res, next) => {
  try {
    if (!req.body.id) {
      res.send({
        message: "voter id  required",
      });
    }
    const voter = await Voter.findOneAndReplace(
      { _id: req.body.id },
      { age: req.body.age, email: req.body.email }
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

module.exports = GetOneAndReplaceVoter;
