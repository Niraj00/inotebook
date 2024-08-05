const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: String,
    age: Number,
    password: {
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);