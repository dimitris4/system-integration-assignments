"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize();
var Pet = sequelize.define('Pet', {
  // Model attributes are defined here
  firstName: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize.DataTypes.STRING // allowNull defaults to true

  }
}, {// Other model options go here
}); // `sequelize.define` also returns the model

console.log(Pet === sequelize.models.Pet); // true

var _default = Pet;
exports["default"] = _default;