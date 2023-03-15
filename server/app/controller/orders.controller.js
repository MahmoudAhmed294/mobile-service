const db = require("../model/index");
const Order = db.order;
const OrderDetails = db.orderDetails;
const { Op } = require("sequelize");

exports.GetAllOrders = async (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;
  let offset = +limit * +page;
  let customer = req.query.customer;
  let invoice = req.query.invoice;
  let status = req.query.status;
  let problem = req.query.problem;
  let start = req.query.start;
  let end = req.query.end;
  try {
    let options = {
      order: [["id", "DESC"]],
      offset: offset,
      limit: +limit,
      nest: true,

      where: {},
    };
    if (customer) options.where.customer = { [Op.substring]: customer };
    if (invoice) options.where.id = invoice;
    if (status) options.where.status = status;
    if (problem) options.where.problem = { [Op.substring]: problem };
    if (start && end) options.where.date = { [Op.between]: [start, end] };
    await Order.findAndCountAll(options).then((data) => {
      if (!data) {
        return res.status(404).send({ message: "data Not found." });
      }
      res.status(200).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "data Not found." + err });
  }
};

exports.DeleteOrder = async (req, res) => {
  const { id } = req.params;
  const { ordersDetailId } = req.body;
  try {
    await Order.destroy({
      where: {
        id: +id,
      },
    })
      .then(async () => {
        await OrderDetails.destroy({
          where: {
            id: ordersDetailId,
          },
        });
      })
      .then(() => {
        res
          .status(200)
          .send({ message: "this order is deleted successfully." });
      });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.AddOrder = async (req, res) => {
  const {
    brand,
    phone,
    customer,
    engineerName,
    spareParts,
    maintenancePeriod,
    costReceived,
    cost,
    isInWarranty,
    serialNumber,
    model,
    status,
    paid,
    date,
    problem,
    comments,
  } = req.body;

  try {
    await OrderDetails.create({
      isInWarranty,
      serialNumber,
      model,
      engineerName,
      spareParts,
      maintenancePeriod,
      costReceived,
      cost,
      comments,
    }).then(async (result) => {
      await Order.create(
        {
          date,
          ordersDetailId: result.id,
          problem,
          status,
          customer,
          phone,
          paid,
          brand,
          cost: cost - costReceived,
        },
        { hooks: true, isNewRecord: true }
      ).then(({ headerID }) => {
        res.status(200).send({
          id: headerID,
          brand,
          problem,
          cost,
          date,
          costReceived,
          remainingCost: cost - costReceived,
          maintenancePeriod,
          serialNumber,
          comments,
          customer,
          phone,
        });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.GetOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findOne({
      where: {
        id: +id,
      },
      include: [
        {
          model: OrderDetails,
          attributes: [
            "maintenancePeriod",
            "engineerName",
            "comments",
            "spareParts",
            "id",
          ],
        },
      ],
    }).then((data) => {
      if (!data) {
        return res.status(404).send({ message: "data Not found." });
      }
      res.status(200).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
exports.UpdateOrder = async (req, res) => {
  const {
    id,
    brand,
    problem,
    date,
    cost,
    status,
    maintenancePeriod,
    engineerName,
    comments,
    spareParts,
    ordersDetailId,
  } = req.body;
  try {
    await Order.update(
      {
        brand,
        problem,
        date,
        cost,
        status,
      },
      {
        where: {
          id: +id,
        },
      }
    ).then(async (data) => {
      await OrderDetails.update(
        {
          maintenancePeriod,
          engineerName,
          comments,
          spareParts,
        },
        {
          where: {
            id: +ordersDetailId,
          },
        }
      );
    }).then(()=>{
    res.status(200).send({ message: "Successes." });
      
    })
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
