const mongoose = require('mongoose')
require('colors')


const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected ${conn.connection.host}`.bgYellow);
        }
        catch(error) {
        console.log(`error: ${error.message}`.bgRed);
        process.exit(1);
    }

};


module.exports = connectDb;