const express = require('express')
const router = express.Router()

router.get('/',(req,res) =>{
    res.render("pets",{text:"A list of all my pets goes here"})
})

router.get('/new',(req,res) =>{
    res.render("pet",{text:"One pet"})
})
router.get('/delete',(req,res) =>{
    res.render("pet",{text:"One pet"})
})

module.exports = router