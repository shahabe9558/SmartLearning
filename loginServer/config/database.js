const { error } = require('console');
const mongoose = require('mongoose');

require('dotenv').config();

const connectWithdb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database"))
    .catch((error) => {
        console.log("Error while connecting to databse")
        console.log(error.message);
        process.exit(1);

    });
}

module.exports = connectWithdb;