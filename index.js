import express  from "express";
import bodyParser from "body-parser";
import { starSequelize } from "./utils/startSequelize.js";

// import routes
import bookingRoutes from "./routes/booking-routes.js"
import roomRoutes from "./routes/room-routes.js"

import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"))

app.use("/room", roomRoutes);
app.use("/booking", bookingRoutes)

starSequelize()
// menjalankan server
app.listen(4000, () => {
    console.log(`server is running at port ${port}`);
});