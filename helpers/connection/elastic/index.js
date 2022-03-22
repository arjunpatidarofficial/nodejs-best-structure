const { Client } = require("@elastic/elasticsearch");

const elasticClient = new Client({
  node: `http://${process.env.ELASTIC_SEARCH_HOST}:${process.env.ELASTIC_SEARCH_PORT}`,
});

module.exports = elasticClient;
