const mongoose = require('mongoose');

const mongoDbConnection = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDbConnection