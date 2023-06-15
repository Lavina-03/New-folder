const express = require('express')
// const { route } = require('express/lib/applications')

// const Detail = require("../models/Detail")
const routes=express.Router()

routes.get("/",(req,res)=>{
    
//    const details= await Detail.findOne({"_id":"647fe129e3c1f77996edac81"})
//    console.log(details)
    res.render("index")
})
routes.get('/gallery',(req,res)=>{
    res.render("gallery")
})

module.exports=routes