const express = require('express');
const app = express();
const hostname = "olivasclass.lcsd2.org"
const port = 3046


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')

app.get("/", logger,(req,res) => {
    res.render("index",{text:"World"})
})

const userRouter = require("./routes/users")
const petsRouter = require("./routes/pets")

app.use("/users", userRouter)
app.use("/pets", petsRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(port, hostname);