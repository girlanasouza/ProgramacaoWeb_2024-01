import express, { Router } from "express";
import mainController from "../controllers/main";
import loremController from "../controllers/loremController";

const router: Router = express.Router();

router.get("/", mainController.index);

router.get("/hb1", mainController.hb1);

router.get("/hb2", mainController.hb2);

router.get("/hb3", mainController.hb3);

router.get("/lorem/:pagraphs", loremController.loremParagraphs);

export default router;
