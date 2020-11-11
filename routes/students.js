const express = require("express")
const Router = express.Router()

const Student = require('./../models/Student')


Router.get('/', async (req,res)=>{
    try {
        const students = await  Student.find();
        res.json(students)
    } catch (error) {
        res.json({err: error});
        
    }
    

})


Router.get('/test',(req,res)=>{
    res.send("this is post test")
})

Router.post('/',async (req,res)=>{
    // console.log(req.body);
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    })

    try {
        const savedstudent = await student.save();
        res.json(savedstudent);
        
    } catch (error) {
        res.json({err: error});
    }

})

module.exports = Router