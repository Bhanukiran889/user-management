const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
  },
  street: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  zipcode: {
    type: DataTypes.STRING,
  },
  lat: {
    type: DataTypes.STRING,
  },
  lng: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
