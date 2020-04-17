const User = require('../models/User');

module.exports = {
    async create(req, res) {
        
        const { email, password } = req.body;

        const user = await User.findOne({
            email: {
                $eq: email,
            },
            password: {
                $eq: password,
            },            
            });
            
        if (!user) {
            return res.status(400).json({error: 'Usuário ou senha inexistente'});
        }

        console.log(user);
        return res.json({user});   

    }
}