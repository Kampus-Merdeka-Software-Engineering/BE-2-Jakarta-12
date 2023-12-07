import { createRoom, readRoom } from "../services/room.js";

export const getRoomList = async(req, res) => {
    const roomList = await readRoom()
    console.log({roomList})
    res.status(200).json({
        data: roomList.map((data) => ({
            ...data.dataValues,
            room_image: `https://be-2-jakarta-12-production.up.railway.app/${data.dataValues.room_image}`
        })),
        message: "sukses mengambil data"
    })
}

export const postRoomItem = async(req, res) => {
    const {type_room, description, price, room_image} = req.body 
    const room = await createRoom(type_room, description, price, room_image)
    res.json(room)
}
