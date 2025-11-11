const express = require('express');
const mongoDbConnection = require('./db');
const dotenv = require("dotenv").config({path:".env"});

const app = express();

mongoDbConnection().then({})
app.use("/home", (req,res,next) => {
    return res.send("hello world")
});

app.listen(3000,()=>{
    console.log("server is started on port ");
});

module.exports = app