import Room from "../models/room-models.js";

export const readRoom = async() => {
    return await Room.findAll()
}
// menambahkan data booking
export const createRoom = async(type_room, description, price, room_image) => {
    return await Room.create({
        type_room,
        description,
        price,
        room_image
    })
}