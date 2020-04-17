const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { latitude, longitude, status } = req.query;

        const count = await User.countDocuments({
            status: "confirmado",
        });
        
        const users = await User.find({
            status: {
                $eq: status,
            }, 
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, //Max distance of 20 km
                },
            },
        });

        res.header('X-Total-Count', count);
        return res.json({users});
    },
}