const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
module.exports = asyncHandler;
// This middleware is used to handle asynchronous errors in Express routes.
// It wraps the route handler function and catches any errors that occur during its execution.
// If an error occurs, it passes the error to the next middleware in the stack, which is typically an error handler.
// This allows for cleaner code and avoids the need to use try-catch blocks in every route handler.