const { Voter } = require("../../../../models/mongoose");
const createError = require("http-errors");

const CreateVoter = async (req, res, next) => {
  try {
    const voter = new Voter({
      name: req.body.name,
      age: req.body.age,
    });
    const savedVoter = await voter.save();

    res.send({ message: "Data saved successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = CreateVoter;
