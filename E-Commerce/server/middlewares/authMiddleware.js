const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  const token = req.cookies?.token; //check for token
  if (!token) {
    return res.status(401).json({ error: "Not authorized , no token" });
  }
  try {
    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //get user from token
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ error: "Not authorized , user not found" });
    }

    next();
  } catch (err) {
    console.error("Auth middleware error : ", error);
    return res.status(401).json({ error: "Not authorized, token failed" });
  }
};
