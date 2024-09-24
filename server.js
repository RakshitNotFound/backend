const express = require ('express')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoute')

require('dotenv').config()
const app = express()
const PORT = process.env.port || 5000

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("CONNECTED TO MONGO")
 }).catch((err) =>{
    console.log(err)
 })



app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))
