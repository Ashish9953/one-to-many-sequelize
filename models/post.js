'use strict';
const {
  Model
} = require('sequelize');
const comment = require('./comment');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       post.hasMany(models.comment);
    }
  };
  post.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'post',
    timestamps:false
  });
  return post;
};