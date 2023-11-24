import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (request, response) => {
    response.json({
        data: {
            id: 1,
            type_room: "standar room",
            price: "700000",
            image_url: "https://asset.kompas.com/crops/SmXa-KlIkF_MVULGBN7IzlIyV1g=/4x0:904x600/750x500/data/photo/2022/12/09/639342fd0b5a8.jpg"},
        message: "data succesfully retrived!"
    });
});

app.listen(port,()=> {
    console.log(`server is running at port ${port}`);
});