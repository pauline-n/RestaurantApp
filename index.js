const express = require('express');
const app = express()
const port = 5000

const restaurantRouter = require('./routes/restaurants')
require('dotenv').config()
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.get('/re', (req,res) => {
    res.send('Hello world!')
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('', restaurantRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})