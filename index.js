import express  from "express";
import bodyParser from "body-parser";
import { starSequelize } from "./utils/startSequelize.js";
import dotenv from "dotenv"
// import routes
import bookingRoutes from "./routes/booking-routes.js"
import roomRoutes from "./routes/room-routes.js"

dotenv.config()
import cors from "cors";

const app = express();
const port = process.env.PORT;

// app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://be-2-jakarta-12-production.up.railway.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(express.static("public"))

app.use("/room", roomRoutes);
app.use("/booking", bookingRoutes)

app.use((err, req, res, next) =>{
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({
        message: 'internar server error'
    })
})

starSequelize()
// menjalankan server
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});