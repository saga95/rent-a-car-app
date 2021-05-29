const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const createUser = async (data) => {
  const { sub, email, name, middle_name, birthdate } = data;
  const params = {
    TableName: "User-62cziftufvgv5lfmmvos6rtii4-dev",
    Item: {
      id: sub,
      email: email,
      firstName: name,
      lastName: middle_name,
      birthday: birthdate,
    },
  };
  await documentClient.put(params).promise();
};

exports.handler = async (event) => {
  try {
    console.log("event: ", event);
    const data = event.request.userAttributes;
    console.log("data: ", data);
    await createUser(data);
    // TODO implement
    return "Success";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
