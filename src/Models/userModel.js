const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const User = sequelize.define(
  "User",
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    pin: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL(10, 2),
  },
  {
    tableName: "users",
    timestamps: false,
  },
);

module.exports = User;
