const express = require("express")
const cors = require("cors");
const { dbConnect } = require("./dbMongo/db");
require("dotenv").config;
const app = express();
const port = process.env.PORT;

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("FUNCIONANDO")
})

app.use("/api", require("./routes"))

dbConnect();
app.listen(port, ()=>{
    console.log("SERVIDOR FUNCIONANDO, EN PUERTO 3000")
})