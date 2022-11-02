const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.render("pets",{text:"Lots of pets go here"})
})

router.get('/new',(req,res) =>{
    res.render("pet",{text:"One pet"})
})
router.get('/delete',(req,res) =>{
    res.render("pet",{text:"One pet"})
})

module.exports = router