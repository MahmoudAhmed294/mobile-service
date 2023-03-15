module.exports = (sequelize, Sequelize, DataTypes) => {
  const ordersDetails = sequelize.define(
    "orders_details",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      model: {
        type: DataTypes.STRING(255),
      },
      serialNumber: {
        type: DataTypes.STRING(255),
      },
      isInWarranty: {
        type: DataTypes.BOOLEAN,
      },
      cost: {
        type: DataTypes.INTEGER,
      },
      costReceived: {
        type: DataTypes.INTEGER,
      },
      comments: {
        type: DataTypes.TEXT,
      },
      maintenancePeriod: {
        type: DataTypes.INTEGER,
      },
      spareParts: {
        type: DataTypes.TEXT,
      },
      engineerName: {
        type: DataTypes.STRING(255),
      },
    },
    {
    }
  );

  return ordersDetails;
};
