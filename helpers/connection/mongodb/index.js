const mongoose = require("mongoose");
const { infoLogger, errorLogger } = require("../../../utils/logger");

const mongoClient = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    infoLogger.info(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    errorLogger.error(`Error ${error.message}`);
    process.exit(1);
  }
};

module.exports = mongoClient;
