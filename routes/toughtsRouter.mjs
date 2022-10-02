import express from "express";
import ToughtController from "../controllers/ToughtController.mjs";

const toughtsRouter = express.Router();



toughtsRouter.get('/', ToughtController.showToughts)

export default toughtsRouter