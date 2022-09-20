const mongoose = require('mongoose')

const customDataSchema = new mongoose.Schema({
    minTemp: {type: Number},
    maxTemp: {type: Number},
    minHum: {type: Number},
    maxHum: {type: Number},
    sensividity: {type: String},
    phoneNumber: {type: String}

})


const CustomData = mongoose.model("customData",customDataSchema)

module.exports = CustomData