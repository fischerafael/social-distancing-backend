const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,        
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        required: true,
    },
    symp: [String],
    places: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
});

module.exports = mongoose.model('User', UserSchema);