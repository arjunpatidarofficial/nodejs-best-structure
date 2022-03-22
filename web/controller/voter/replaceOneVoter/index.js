const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const ReplaceOneVoter = async (req, res, next) => {
  try {
    if (req.body.name && req.body.newage) {
      res.send({
        message: "name and newage are required",
      });
    }
    const voter = await Voter.replaceOne(
      { age: req.body.age },
      req.body.object,
      null,
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Original Doc : ", docs);
        }
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

module.exports = ReplaceOneVoter;
