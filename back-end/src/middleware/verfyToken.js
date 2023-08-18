// middleware/verifyToken.js
import jwt from "jsonwebtoken";

const secretKey = "SECRRET_KEY";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden - Invalid token" });
    }

    // Store the decoded user information in the request object for further use in the route handlers
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
