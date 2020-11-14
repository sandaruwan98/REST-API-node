const express = require('express')

const Route = express.Router()

const Movie = require('./../models/Movie')

Route.get('/all/:count', async (req,res) => {
    try {
        const movies = await Movie.find().limit( parseInt(req.params.count))
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})



module.exports = Route