const mongoose = require("mongoose")

const PlayersScheme = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    team:{
        type:String,
    },
    nationality:{
        type:String,
    },
    position:{
        type: ["PO","DEF","MED","DEL"],
        
    },
    
},
{
  timestamps:true,
  versionKey: false  
})

const Player = mongoose.model ("Player", PlayersScheme)
module.exports = Player;