import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const Booking = sequelize.define("databookings", {
    name:DataTypes.STRING,
    email: DataTypes.STRING,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    rooms: DataTypes.INTEGER,
    type_room: DataTypes.STRING,

})

export default Booking
