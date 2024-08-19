process.on("uncaughtException", e => {
  console.error(e);
})

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require("./config/auth");

const authRouter = require('./routes/auth')
const tripsRouter = require('./routes/trips');
const blogPostsRouter = require('./routes/blog-posts');

const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(passport.initialize())

mongoose.connect(MONGO_URL);

app.use('/', authRouter);
app.use('/trips', tripsRouter);
app.use('/blog-posts', blogPostsRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    status: err.status,
    stack: error.stack
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
