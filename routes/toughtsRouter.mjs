import express from "express";
import ToughtController from "../controllers/ToughtController.mjs";

//helpers
import checkAuth from "../helpers/auth.mjs";

const toughtsRouter = express.Router();

toughtsRouter.get("/add", checkAuth, ToughtController.createTought);
toughtsRouter.post("/add", checkAuth, ToughtController.createToughtSave);
toughtsRouter.get("/edit/:id", checkAuth, ToughtController.updateTought);
toughtsRouter.post("/edit", checkAuth, ToughtController.updateToughtSave);
toughtsRouter.get("/dashboard", checkAuth, ToughtController.dashboard);
toughtsRouter.post("/remove", checkAuth, ToughtController.removeTought);
toughtsRouter.get("/", ToughtController.showToughts);

export default toughtsRouter;
