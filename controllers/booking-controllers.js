import { createDataBooking, readBooking } from "../services/booking.js";

export const getBooking = async(req, res) => {
    const booking = await readBooking()
    console.log({booking})
    res.status(200).json({
        data: booking,
        message: "sukses mengambil data"
    })
}

// post booking
export const postBookingItem = async(req, res) => {
    const {name, email, check_in, check_out, adults, childern, rooms, type_room} = req.body 
    const booking = await createDataBooking(name, email, check_in, check_out, adults, childern, rooms, type_room)
    res.json(booking)
}