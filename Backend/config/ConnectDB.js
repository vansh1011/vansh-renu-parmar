const mongoose = require('mongoose');

async function connect() {
    
    try {

        await mongoose.connect(process.env.MONGO_URL);

        const connection = mongoose.connection;

        connection.on('connected' ,()=>{
        console.log('connected succefully!');

        connection.on('error' , (error)=>{
            console.log('error occur !',error);
            
        })
            
        })


    } catch (error) {
        console.log('some error occur and we are unable to connect the db' , error);
        
    }

}   

module.exports = connect;