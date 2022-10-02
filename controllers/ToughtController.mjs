import Tought from "../models/Tought.mjs";
import User from "../models/User.mjs";

export default class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }
}
