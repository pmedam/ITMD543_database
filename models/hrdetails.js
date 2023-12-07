const {Schema, model} = require('mongoose');

const hrdetails = new Schema({
    companyName: String,
    startDate: String,
    endDate: String,
    roleName: String,
    rolesAndResponsibilities: String
})

module.exports = model('hrdetails', hrdetails)