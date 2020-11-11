const express = require("express")
const mongoose = require("mongoose")
require('dotenv/config')
const app = express()


// MIDDLEWARES
app.use('/posts', ()=>{
    console.log('this is a middlleware');
})


// ROUTES
app.get('/', (req,res) => {
    res.send("Heloo")
})

app.get('/posts', (req,res) => {
    res.send("Heloo this is posts")
})

mongoose.connect( process.env.DB_CONNECTION,
    {useNewUrlParser: true ,useUnifiedTopology: true} , 
    ()=>{console.log("conncted to db");}
)


//SERVER
app.listen(3001)
console.log("server listening at port 3001")