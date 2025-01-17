const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
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

const User = mongoose.model('User', userSchema);
module.exports = User;