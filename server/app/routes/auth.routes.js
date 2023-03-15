const controller = require("../controller/auth.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });


  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/checkToken",[authJwt.verifyToken] ,controller.checkToken);
};
