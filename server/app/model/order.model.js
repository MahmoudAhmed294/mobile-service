module.exports = (sequelize, Sequelize, DataTypes) => {
  const orders = sequelize.define(
    "orders_headers",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      ordersDetailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
      },
      problem: {
        type: DataTypes.NUMBER,
      },
      brand: {
        type: DataTypes.STRING,
      },
      cost: {
        type: DataTypes.NUMBER,
      },
      status: {
        type: DataTypes.ENUM("Success", "Under Process", "Not in stock"),
      },
      customer: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      paid: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      // Options
    }
  );

  return orders;
};
