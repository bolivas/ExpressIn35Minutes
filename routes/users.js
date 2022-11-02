const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send("Users List")
})
router.get('/new', (req,res) => {
    res.render("users/new")
})
router.post('/', (req,res) => {
    console.log(req.body.firstName)
    res.send("Hi")
})

router
    .route("/:id")
    .get((req,res)=>{
        res.send(`Get User by Id ${req.params.id}`)
    })
    .put((req,res)=>{
        res.send(`Edit User by Id ${req.params.id}`)
    })
    .delete((req,res)=>{
        res.send(`Delete User by Id ${req.params.id}`)
    })
const user = [{name:"John"},{name:"Sally"}]
router.param("id",(req,res,next,id)=>{
    console.log(id)
    next()
})
module.exports = router