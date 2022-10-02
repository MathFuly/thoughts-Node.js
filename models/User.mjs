import { DataTypes } from "sequelize";
import db from "../db/conn.mjs";

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    require: true,
  },
  senha: {
    type: DataTypes.STRING,
    require: true,
  },
});

export default User