const express = require('express')

const Route = express.Router()

const Movie = require('./../models/Movie')


// get  movie by id
Route.get('/:id', async (req,res) => {
    try {
        const movies = await Movie.findById(req.params.id)
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})


// get all movie titles with a limit
Route.get('/all/:count', async (req,res) => {
    try {
        const movies = await Movie.find().select('title').limit( parseInt(req.params.count))
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})


// // get all movies titles
// Route.get('/all', async (req,res) => {
//     try {
//         const movies = await Movie.find().select('title')
//         res.json(movies)
        
//     } catch (error) {
//         res.json({"msg": error})
//     }
// })


// get all movies higher than given rating
Route.get('/imdb/:val', async (req,res) => {
    try {
        const movies = await Movie.find().where('imdb.rating').gte(parseFloat(req.params.val))
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})



// search movie by title
Route.get('/search/:title', async (req,res) => {
    try {
        const movies = await Movie.find({title: new RegExp(req.params.title)})
        res.json(movies)
        
    } catch (error) {
        res.json({"msg": error})
    }
})



module.exports = Route