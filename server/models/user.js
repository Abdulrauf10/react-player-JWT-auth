"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
    static #encrypt = (password) => bcrypt.hashSync(password, 10);
    static register = ({
      email,
      password,
    }) => {
      const encryptedPassword = this.#encrypt(password);

      return this.create({
        email,
        password: encryptedPassword,
      });
    };

    checkPassword = (password) => bcrypt.compareSync(password, this.password);
    generateToken = () => {
      const payload = {
        id: this.id,
        email: this.email,
      };
      const secret = "donottellanybody";
      const token = jwt.sign(payload, secret);
      return token;
    };
    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) return Promise.reject("email not found!");
        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) return Promise.reject("Wrong password");
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
