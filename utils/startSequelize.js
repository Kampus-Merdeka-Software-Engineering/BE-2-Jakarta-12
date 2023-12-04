import sequelize from "../config/sequelize.js"
export const starSequelize = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter: true})
        console.log("sucsesfully connected database")
        console.log("avaible models connected to databasse =>", Object.keys(sequelize.models).join(","))

    } catch (e) {
        console.error(e)
    }
}