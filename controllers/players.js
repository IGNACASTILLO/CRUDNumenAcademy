const { json } = require("express");
const { matchedData } = require("express-validator");
const { playersModel } = require("../models")
const {handleError} = require("../utils/handleError")

const getUsers = async (req,res)=> {
    try {
        const data = await playersModel.find({});
        res.send({data})
    } catch (error) {
        handleError(res,"ERROR EN CREATE_USER")
    }
    
}

const getUserById = async (req,res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await playersModel.findById(id);
        res.json({data})
    } catch (error) {
        handleError(res,"ERROR EN GET_USER_BY_ID")
    }
   
}

const createUser = async (req,res) => {
    try {
        const bodyClean = matchedData(req)
        console.log(bodyClean)
        const data = await playersModel.create(bodyClean)
        res.send({data})
    } catch (error) {
        handleError(res,"ERROR EN CREATE_USER")
    }
   
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const {body} = req 
        console.log(id)
        console.log(body)
        const data = await playersModel.findByIdAndUpdate(id,body)
        res.send({body,msg:"USUARIO ACTUALIZADO"}) 
    } catch (error) {
        handleError(res,"ERROR EN UPDATE_USER")
    }
   
}

const deleteUser = async (req,res) => {
    try {
        
        const {id} = req.params;
        const data = await playersModel.findByIdAndDelete(id)
        res.send({data, msg:"USUARIO ELIMINADO"})
    } catch (error) {
        handleError(res,"ERROR EN DELETE_USER")
    }
   
    
}


module.exports = {getUsers,createUser,updateUser,deleteUser,getUserById}