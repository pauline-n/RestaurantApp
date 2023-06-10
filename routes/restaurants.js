const express = require("express");
const router = express.Router()
const Restaurants = require('../models/Restaurants');
const multer = require('multer');
path = require('path')

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:(req, file, cb)=>{
      cb(null, file.fieldname, Date.now() + '-' + file.originalname);
    }
  });
  
  //Image upload
  const upload = multer({
    storage: storage,
  }).single('img');
  

router.get('/', (req, res) => {
    res.send('/')
})

router.post('/', upload, async(req,res) => {
    try{
        const rest = new Restaurants({
            img: {
                data: req.file.filename,
                contentType: "image/png"
            },
            rname:req.body.rname,
            rtype: req.body.rtype,
            location: req.body.location,
            workhours: req.body.workhours,
            services: req.body.services,
            contact: req.body.contact
        })
        // rest.img = req.file.filename;
        await rest.save()
        console.log(rest)
        res.send('successfully uploaded')
    }  catch(err) {
        res.status(400).send('Sorry! Something went wrong')
        console.log(err)
    }
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