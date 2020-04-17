const User = require('../models/User');

module.exports = {
    async create(req, res) {
        const { email, password, status, symp, places, latitude, longitude } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            const sympArray = symp.split(',').map(symp => symp.trim());
            const placesArray = places.split(',').map(place => place.trim());
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };        
            
            user = await User.create({
                email,
                password,
                status,
                symp: sympArray,
                places: placesArray,
                location,
            });
        }     
    
        return res.json({ email });
    },

    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async delete(req, res) {
        try {            
            const auth = req.headers.authorization;

            await User.findOneAndDelete({ email: auth });
            
            return res.send({message: 'Usuário deletado'});
        } catch (err) {
            return res.status(204).send({error: 'Erro ao deletar o usuário.'});
        }
    }, 
    
};