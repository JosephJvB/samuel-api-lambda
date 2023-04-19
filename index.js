exports.handler = async (event) => {
  console.log({ event });
  return {
    headers: {
      "Content-Type": "application/json",
      Allow: "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify({
      message: "success",
    }),
  };
};
