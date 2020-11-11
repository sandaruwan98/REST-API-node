const express = require("express")

const app = express()
// MIDDLEWARES



// ROUTES
app.get('/', (req,res) => {
    res.send("Heloo")
})

app.get('/posts', (req,res) => {
    res.send("Heloo this is posts")
})


//SERVER
app.listen(3001)
console.log("server listening at port 3001")