const { DataTypes } = require("sequelize");
const sequelize = require("../db/mysql");

/**
 * 用户模型
 */
const UserModel = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userAccount: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userAvatar: {
      type: DataTypes.STRING,
    },
    userProfile: {
      type: DataTypes.STRING,
    },
    userRole: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userPhone: {
      type: DataTypes.STRING,
    },
    userGender: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userBirthday: {
      type: DataTypes.DATE,
    },
    userAddress: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "user",
    paranoid: true,
    createdAt: 'createTime',
    updatedAt: 'updateTime',
    deletedAt: "isDelete",
    timestamps: false,
  }
);

module.exports = UserModel;
