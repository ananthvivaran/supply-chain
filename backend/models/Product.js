<<<<<<< HEAD
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: true // ✅ Changed from false to true
    }
});

module.exports = Product;
=======
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    supplier: {
        type: DataTypes.STRING,
        allowNull: true // ✅ Changed from false to true
    }
});

module.exports = Product;
>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
