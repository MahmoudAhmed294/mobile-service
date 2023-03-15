const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    define: {
      timestamps: false,
    },

    operatorsAliases: false,

    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.order = require("./order.model.js")(sequelize, Sequelize, DataTypes);
db.orderDetails = require("./orderDetails.model.js")(sequelize, Sequelize, DataTypes);




db.orderDetails.hasMany(db.order, {
  foreignKey: "ordersDetailId",
  onUpdate: 'RESTRICT'

});

db.order.belongsTo(db.orderDetails);


module.exports = db;
