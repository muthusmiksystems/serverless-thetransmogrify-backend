"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Users.init(
    {

      email: {type:DataTypes.STRING},
      auth0_user_id:{type:DataTypes.STRING},
      password:{type:DataTypes.STRING},
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "Users",
      timestamps: true,
      underscored: true,
    }
  );
  return Users;
};
