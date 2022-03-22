const express = require("express");
const morgen = require("morgan");
const createError = require("http-errors");
const { mongoClient, elasticClient } = require("../helpers/connection");
const { infoLogger, errorLogger } = require("../utils/logger");

const { authRouter, voterRouter, masterRouter } = require("./routes");

const { verifyAccessToken } = require("../helpers/jwt/index.js");
const swaggerUi = require("swagger-ui-express");
const swaggerJson = require("../assets/swagger.json");

const app = express();

const options = {
  definition: {
    openapi: "V1.0.0",
    info: {
      title: "Bimaxpress",
      description: "Bimaxpress decs",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  apis: ["./Routes/*.js"],
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson, options));

app.use(morgen("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoClient();

app.get("/", async (req, res, next) => {
  // console.log(req.headers['authorization'])
  res.send("Welcome to bimaxress");
});

app.use("/auth", authRouter);
app.use("/master", masterRouter);
app.use("/voter", voterRouter);

app.use(async (req, res, next) => {
  next(createError.NotFound("This route does not exist"));
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  infoLogger.info(`server running on port ${PORT}`);
});
