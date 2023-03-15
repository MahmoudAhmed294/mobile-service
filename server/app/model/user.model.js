module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "users", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      isAdmin: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      // Options
      timestamps: false,
    }
  );

  return User;
};
