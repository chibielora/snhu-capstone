const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const User = require("../models/user")
const { expressjwt: jwt } = require("express-jwt")

passport.use(new LocalStrategy({
    usernameField: "email"
}, (email, password, done) => {
    User.findOne({ email }).then(user => {
        if (!user) {
            return done(null, false, {
                message: "Incorrect email"
            })
        }
        if (!user.validPassword(password)) {
            return done(null, false, {
                message: "Incorrect password"
            })
        }

        return done(null, user);
    })
}))

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['RS256']
});

module.exports = { auth }
