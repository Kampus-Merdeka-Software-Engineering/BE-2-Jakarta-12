import express from "express";
import { getBooking, postBookingItem } from "../controllers/booking-controllers.js";
const router = express.Router();

router.get("/", getBooking);
router.post("/addbooking", postBookingItem);


export default router;