import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize();

const Pet = sequelize.define('Pet', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Pet === sequelize.models.Pet); // true

export default Pet;