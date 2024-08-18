const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields required" })
    }
    const user = new User()
    user.name = name;
    user.email = email;
    user.setPassword(password);

    user.save()
        .then(() => {
            // Log the user in
            const token = user.generateJwt();
            res.status(200).json({ token });
        }).catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
})

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Email and password required" })
    }

    passport.authenticate('local', (err, user, info) => {
        console.log(err, user, info)
        if (err) {
            return res.status(400).json(err);
        }

        if (!user) {
            res.status(401).json(info);
        }

        const token = user.generateJwt();
        res.status(200).json({ token })
    })
})

module.exports = router;
