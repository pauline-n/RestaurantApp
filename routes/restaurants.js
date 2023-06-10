const express = require("express");
const router = express.Router()

restList = [
    {
        "id": 1,
        "name": "Palish",
        "quantity": 3
    },
    {
        "id": 2,
        "name": "Rebon",
        "quantity": 4
    }
]

router.get('/', (req, res) => {
    res.send(restList)
})

router.post('/', (req,res) => {
    const addRestaurant= {
        id: restList.length+1,
        name: req.body.name,
        quantity: req.body.quantity
    }
    console.log(req.body)
    restList.push(addRestaurant)
    res.send(addRestaurant)
    res.sendStatus(201)
})

router.get('/:id', (req, res) => {
    res.send('get details')
})
router.put('/:id', (req, res) => {
    req.params.id
    res.send('updated')
})

router.delete('/:id', (req,res) => {
    res.send('deleted')
})

module.exports = router