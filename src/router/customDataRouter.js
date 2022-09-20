const router = require('express').Router()

const CustomData = require('../models/customDataModel')


router.post("/",async(req,res) => {
    try {
        const {minTemp,maxTemp,minHum,maxHum,sensividity,phoneNumber} = req.body
        const newCustomData = new CustomData({
            minTemp,
            maxTemp,
            minHum,
            maxHum,
            sensividity,
            phoneNumber
        })
        const savedCustomData = await newCustomData.save()
        res.json(savedCustomData)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

module.exports = router