const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const GetOneAndUpdateVoter = async (req, res, next) => {
  try {
    const voter = await Voter.findOneAndUpdate(
      { name: req.body.name },
      {
        phone: req.body.phone,
        email: req.body.email,
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

module.exports = GetOneAndUpdateVoter;
