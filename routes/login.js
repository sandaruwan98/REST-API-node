const { Router } = require('express')
const {secret} = require('../helpers/config')
const Route = Router()
const User = require('../models/User')

Route.post('/', (req,res) => {
    const { username,password } = req.body
    

    const token = jwt.sign({ sub: user.id }, secret, { expiresIn: '7d' });

    res.json({password,username})
} )




module.exports = Route