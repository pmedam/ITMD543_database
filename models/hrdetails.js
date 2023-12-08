const {Schema, model} = require('mongoose');

const hrdetails = new Schema({
    name: String,
    phoneNumber: String,
    email: String,
    subject: String,
    message: String
})

module.exports = model('hrdetails', hrdetails)