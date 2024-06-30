import express, { Router } from "express";
import mainController from "../controllers/main";
import loremController from "../controllers/loremController";

const router: Router = express.Router();

router.get("/", mainController.index);

router.get("/lorem/:pagraphs", loremController.loremParagraphs);

export default router;
