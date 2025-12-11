class ResponseController {
  async success(data, message, res) {
    let responseData = {
      status: 200,
      message: message,
      data: data,
    };
    res.writeHead(responseData.status, { "Content-Type": "application/json" });
    res.write(JSON.stringify(responseData));
    res.end();
  }

  async error(error, res) {
    let errorCode = 500; // default to 500
    if (typeof error.code === "number") {
      errorCode = error.code;
    }

    let errorMessage = error.message || error.code || "Something went wrong";

    res.writeHead(errorCode, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ status: errorCode, message: errorMessage, data: {} })
    );
    res.end();
  }
}

module.exports = new ResponseController();
