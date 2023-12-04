import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mysql://root:@localhost:3306/hotelrelve")

export default sequelize