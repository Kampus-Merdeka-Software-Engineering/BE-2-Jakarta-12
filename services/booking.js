import Booking  from "../models/booking-models.js";
// menampilkan seua data booking
export const readBooking = async() => {
    return await Booking.findAll()
}

// menambahkan data booking
export const createDataBooking = async(name, email, check_in, check_out, adults, childern, rooms, type_room) => {
    return await Booking.create({
        name,
        email,
        check_in,
        check_out,
        adults,
        childern,
        rooms,
        type_room
    })
}