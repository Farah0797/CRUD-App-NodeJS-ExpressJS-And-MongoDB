const express=require("express")
const connectDB=require('./config/connectDB')
require("dotenv").config()

const app=express()
app.use(express.json())
connectDB()
app.use("/vols", require("./routes/vol"));
const port = process.env.PORT || 4000



app.listen(port,(err)=> {
    err
    ? console.log(err) 
    :console.log(`Server is running on http://localhost:${port}`) 
})



