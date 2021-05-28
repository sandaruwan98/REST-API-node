const { Router } = require('express')
const {secret} = require('../helpers/config')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
    

const Route = Router()

Route.post('/', (req,res,next) => {
    
    authenticate(req.body).then( user => res.json(user) ).catch(next);

} )


async function  authenticate({username,password}) {
    // const user = (username == 'test' && password == 'test') ? {username,password} : null
    const user = await User.findOne({username,password})

    if(!user) throw "Username password incorrect"

    const token = jwt.sign({ sub: user._id }, 'lakshan', { expiresIn: '7d' });
    const {_id} = user
    return { _id,username,token }

}


module.exports = Route