const express = require('express');
const app = express()
const port = 5000

const restaurantRouter = require('./routes/restaurants')


app.get('/re', (req,res) => {
    res.send('Hello world!')
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('', restaurantRouter)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})