import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Room = sequelize.define("rooms", {
    type_room: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    room_image: DataTypes.STRING

})
export default Room