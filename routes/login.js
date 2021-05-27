const { Router } = require('express')
const express = require('express')

const router = express.Router()
const User = require('../models/User')

router.post('/', (req,res) => {
    const { username,password } = req.body
    res.json({password,username})
} )