const express = require("express");

const router = express.Router()

router.get('/', (req, res) => {
    res.send('my restaurants')
})

router.post('/', (req,res) => {

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