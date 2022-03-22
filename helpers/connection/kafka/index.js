const { Kafka } = require("kafkajs");

const clientId = process.env.KAFKA_CLIENT_ID;
const brokers = [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`];

const kafkaClient = new Kafka({ clientId, brokers });

module.exports = kafkaClient;
