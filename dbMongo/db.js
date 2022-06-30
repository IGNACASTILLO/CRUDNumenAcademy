const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        console.log("**BASE DE DATOS CONECTADA**")
    } catch (error) {
        console.log("**ERROR AL CONECTAR CON MONGO DB**")
    }
}

module.exports = {dbConnect}