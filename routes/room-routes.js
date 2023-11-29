import express from "express";
import { getRoomList } from "../controllers/room-controllers.js";
const router = express.Router();

router.get("/list", getRoomList);

export default router;