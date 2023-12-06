import express from "express";
import { getRoomList } from "../controllers/room-controllers.js";
const router = express.Router();

router.get("/", getRoomList);

export default router;