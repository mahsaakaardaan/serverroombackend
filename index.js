const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 5000;

const MONGODB = "mongodb+srv://mahsaa:09906827971mahsaa@cluster0.vq6pk.mongodb.net/?retryWrites=true&w=majority"
const MON2 = "mongodb://mahsaa:09906827971mahsaa@cluster0-shard-00-00.vq6pk.mongodb.net:27017,cluster0-shard-00-01.vq6pk.mongodb.net:27017,cluster0-shard-00-02.vq6pk.mongodb.net:27017/?ssl=true&replicaSet=atlas-rzwdn9-shard-0&authSource=admin&retryWrites=true&w=majority"

app.listen(PORT,() => console.log('server is up'))

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))

mongoose.connect(MON2,(err) => {
    if(err) return console.log('mongo error',err)
    console.log('connected db')
})


app.use("/post",require('./src/router/customDataRouter'))