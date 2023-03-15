const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../model/index");
const authJwt = require("../middlewares/authJwt");
const User = db.user;

exports.signin = (req, res) => {
  try {
    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      let token = jwt.sign({ id: user.id , name:user.name }, config.auth.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        accessToken: token,
      });
    });
  } catch (err) {
    console.log(err);
  }
};


exports.checkToken =  (req, res) => {
  res.status(200).send({
    name:req.name,
    id:req.userId
  });
};

