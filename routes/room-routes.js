import express from "express";
import { getRoomList, postRoomItem } from "../controllers/room-controllers.js";
const router = express.Router();

router.get("/", getRoomList);
router.post("/addroom", postRoomItem );

export default router;