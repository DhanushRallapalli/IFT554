
function requestLogger(req, res, next) {
    const { method, url } = req;
    console.log(`[${new Date().toISOString()}] ${method} request to ${url}`);
    next();
  }
  

  function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  }
  
  module.exports = { requestLogger, errorHandler };
  