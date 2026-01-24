module.exports = function handleErrorResponse(res, error, message = "Server error", status = 500) {
  console.error("Error:", message, error);

  return res.status(status).json({
    success: false,
    message,
    error: error?.message || error
  });
};
