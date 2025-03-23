const express = require('express')
const dotenv = require('dotenv')
const connect = require('./config/ConnectDB')
const cors = require('cors')
const router = require('./routes/index')
dotenv.config();

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',  // React frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: ['Content-Type'],
  //   credentials: true
  }));
  
//   remember to use the cors after const app = express()
//   use the cors before the app.use(express.json()) and app.use('/api' , router)
// 


const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use('/api', router)






connect().then(()=>{

    app.listen(PORT , ()=>{
        console.log(`app is listing on the port ${PORT}`);
        
    })

})