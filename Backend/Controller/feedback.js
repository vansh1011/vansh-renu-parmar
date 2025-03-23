const { response } = require("express")
const UserModel = require("../model/UserModel")

async function feedback(req,res){
    try {

        const {name , email , number, message} = req.body

        const payload = 
        {
            name, 
            email, 
            number,
            message
        }

        const user = new UserModel(payload)
        const userSave = await user.save()
        
        return res.status(201).json({
            message : "Thanks for the Feddback",
            data : userSave,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}
module.exports = feedback