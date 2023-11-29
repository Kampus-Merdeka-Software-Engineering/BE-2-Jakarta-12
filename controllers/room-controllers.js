export const getRoomList = (req, res) => {
    res.status(200).json({
        data: [
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Standar Room',
                description: 'Larger room with additional space and additional facilities',
                price: 200000,
            },
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Deluxe Room',
                description: 'Larger room with additional space and additional facilities',
                price: 1300000,
            },
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Suite Room',
                description: 'Larger room with additional space and additional facilities',
                price: 700000,
            },
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Suite Room',
                description: 'Larger room with additional space and additional facilities',
                price: 800000,
            },
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Family Room',
                description: 'Larger room with additional space and additional facilities',
                price: 500000,
            },
            {
                room_image: 'https://source.unsplash.com/random/?hotel',
                title: 'Family Room',
                description: 'Larger room with additional space and additional facilities',
                price: 500000,
            },
        ],
        message: "sukses mengambil data",
    });
};
