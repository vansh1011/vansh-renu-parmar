const mongoose = require('mongoose')

const UserShema = new mongoose.Schema({

    name : 
    {
        type : String,
        required : [true , 'provide your name']
    },
    email : 
    {
        type : String,
        required : [true , 'provide your email']

    },
    number : 
    { 
        type : Number ,
        required : [ true , 'provide your Number']
    },

    message : 
    {
        type : String ,
        required : [true , 'Please write something']
    }

    

})

const User = mongoose.model("Feedback" , UserShema)

module.exports = User