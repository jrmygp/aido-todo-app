class Service {
  static handleSuccess = ({ data = undefined, statusCode = 200, message = "Request Successful" }) => {
    return {
      success: true,
      data,
      message,
      statusCode,
    };
  };

  static handleError = ({ message = "Internal Server Error", statusCode = 500 }) => {
    return {
      success: false,
      message,
      statusCode,
    };
  };
}

module.exports = Service;
