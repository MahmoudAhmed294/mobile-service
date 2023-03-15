const controller = require("../controller/orders.controller");

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });


  app.get("/api/orders", controller.GetAllOrders);
  app.delete("/api/orders/:id", controller.DeleteOrder);
  app.post("/api/orders", controller.AddOrder);
  app.put("/api/orders", controller.UpdateOrder);
  app.get("/api/getOrder/:id", controller.GetOrder);
};
