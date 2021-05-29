const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const createOrder = async (data) => {
  const orderId = uuidv4();
  const { userId, vehicleId, total } = data;
  const params = {
    TableName: process.env.ORDER_TABLE,
    Item: {
      id: orderId,
      userId: userId,
      vehicleId: vehicleId,
      total: total,
      orderId: orderId,
    },
  };
  await documentClient.put(params).promise();
};
exports.handler = async (event) => {
  try {
    const data = event;

    createOrder(data);
    // TODO implement
    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
