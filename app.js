const express = require("express")
const mongoose = require("mongoose")
require('dotenv/config')
const app = express()

// Route import
const PostRouter = require('./routes/posts')


// MIDDLEWARES
app.use('/posts', PostRouter)



// ROUTES
app.get('/', (req,res) => {
    res.send("Heloo")
})


mongoose.connect( process.env.DB_CONNECTION,
    {useNewUrlParser: true ,useUnifiedTopology: true} , 
    ()=>{console.log("conncted to db");}
)


//SERVER
app.listen(3001)
console.log("server listening at port 3001")