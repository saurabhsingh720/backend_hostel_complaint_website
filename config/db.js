const mongoose = require("mongoose");
require('dotenv').config();
const URL = process.env.MONGO_URI;

const connectDB = async () => {
     try {
          await mongoose.connect(URL, {});
          console.log("Database connected");
     } catch (error) {
          console.log(error);
     }
}

module.exports = {connectDB}