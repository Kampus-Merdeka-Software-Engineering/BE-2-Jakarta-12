import express  from "express";
import bodyParser from "body-parser";
import roomRoutes from "./routes/room-routes.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use("/room", roomRoutes);

app.listen(4000, () => {
    console.log(`server is running at port ${port}`);
});