const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()
const Port = process.env.PORT

app.get("/",(req,res)=>{
  res.send("Hello world")
})

app.get("/google",(req,res)=>{
    res.send("DhruvinPatel1700@gmail.com")
  })
 
  app.get("/json",(req,res)=>{
    res.json({
      name:"dhruvin",
      surname:"patel"
    })
  })

app.listen(Port,()=>{
    console.log(`Server is Connected at http://localhost:${Port}`)
})