const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../../model/User')

/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 */

router.post('/register', (req, res) => {
    let { name, username, email, password, confirm_password } = req.body

    // Check if password is same as confirm_password
    if(password !== confirm_password) {
        return res.status(400).json({
            msg: "Password don't match."
        })
    }

    // Check if username is unique
    User.findOne({ username: username })
    .then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Username is already taken."
            })
        }
    })

    // Check if email is unique
    User.findOne({ email: email })
    .then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forgot your password?"
            })
        }
    })

    let user = new User({
        name,
        username,
        email,
        password
    })

    // Hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err
            newUser.password = hash
            newUser.save()
            .then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered"
                })
            })
        })
    })
})

module.exports = router
