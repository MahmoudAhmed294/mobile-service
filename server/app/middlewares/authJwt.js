const jwt = require("jsonwebtoken");
const config = require("../config/config.js");
const db = require("../model/index");

verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    req.userId = decoded.id;
    req.name = decoded.name;

    next();
  });
};




const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
