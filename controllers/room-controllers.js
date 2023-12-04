import { readRoom } from "../services/room.js";

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
// export const getRoomList = (req, res) => {
//     res.status(200).json({
//         data: [
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Standar Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 200000,
//             },
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Deluxe Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 1300000,
//             },
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Suite Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 700000,
//             },
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Suite Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 800000,
//             },
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Family Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 500000,
//             },
//             {
//                 room_image: 'https://source.unsplash.com/random/?hotel',
//                 title: 'Family Room',
//                 description: 'Larger room with additional space and additional facilities',
//                 price: 500000,
//             },
//         ],
//         message: "sukses mengambil data",
//     });
// };
