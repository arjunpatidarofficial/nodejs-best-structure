const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const DeleteManyVoter = async (req, res, next) => {
  try {
    if (!req.body.name) {
      res.send({
        message: "Name required",
      });
    }

    const voter = await Voter.deleteMany({
      name: req.body.name,
      age: { $gte: req.body.age },
    });
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

module.exports = DeleteManyVoter;
