require('dotenv').config()
const express = require('express');
const productroute = require('./routes/productsRoute');
const ConnectDB = require('./db/connect');
const port = process.env.PORT || 3001;
const app = express();


app.get('/', (req, res)=>{
    res.send("hello")
})

// Middleware

app.use('/api/', productroute)


const start = async () =>{
    try{
        await ConnectDB(process.env.DATABASE_CONNECTION_STRING)
        await
        app.listen(port, ()=>{
            console.log("Server is runing Sucessfuly on Port", port);
        })
    }catch(err){
        console.log("error",err);
    }
}

start()