const express = require("express")
require('dotenv/config')
const app = express()
const mongoose = require("mongoose")

const bodyparser = require('body-parser')
app.use(bodyparser.json())



// Route import
const studentRoute = require('./routes/students')
// MIDDLEWARES

app.use('/student', studentRoute)



// ROUTES
app.get('/', (req,res) => {
    res.send("Heloo")
})

app.post('/',(req,res)=>{
    console.log(req.body);
})


mongoose.connect( process.env.DB_CONNECTION,
    {useNewUrlParser: true ,useUnifiedTopology: true} , 
    ()=>{console.log("conncted to db");}
)
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//SERVER
app.listen(3001)
console.log("server listening at port 3001")