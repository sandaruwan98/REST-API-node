const express = require("express")
const Router = express.Router()

Router.get('/',(req,res)=>{
    res.send("Posbdfbdfbf")
})


Router.get('/test',(req,res)=>{
    res.send("this is post test")
})

Router.get('/t',(req,res)=>{
    res.send("this is post")
})

module.exports = Router