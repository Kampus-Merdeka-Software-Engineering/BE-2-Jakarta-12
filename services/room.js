import Room from "../models/room-models.js";

export const readRoom = async() => {
    return await Room.findAll()
}