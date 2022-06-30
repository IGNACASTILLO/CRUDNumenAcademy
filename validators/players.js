const {check} = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
        check("name")
        .exists()
        .notEmpty(),
        check("age")
        .exists()
        .notEmpty(),
        check("team")
        .exists()
        .notEmpty(),
        check("nationality")
        .exists()
        .notEmpty(),
        check("position")
        .exists()
        .notEmpty(),
        (req,res,next)=>{
            return validateResults(req,res,next)
        }

]

const validatorGetItemId = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
        (req,res,next)=>{
            return validateResults(req,res,next)
        }
]


module.exports ={validatorCreateItem,validatorGetItemId}