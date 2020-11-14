const express = require('express')

const Route = express.Router()

const Movie = require('./../models/Movie')

// get all movies with a limit
Route.get('/all/:count', async (req,res) => {
    try {
        const movies = await Movie.find().limit( parseInt(req.params.count))
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})

// search movie by title
Route.get('/:title', async (req,res) => {
    try {
        const movies = await Movie.find({title: new RegExp(req.params.title)})
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})



module.exports = Route