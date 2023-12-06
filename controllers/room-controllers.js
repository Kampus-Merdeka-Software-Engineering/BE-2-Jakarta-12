import { createRoom, readRoom } from "../services/room.js";

export const getRoomList = async(req, res) => {
    const roomList = await readRoom()
    console.log({roomList})
    res.status(200).json({
        data: roomList.map((data) => ({
            ...data.dataValues,
            room_image: `http://localhost:4000/${data.dataValues.room_image}`
        })),
        message: "sukses mengambil data"
    })
}
