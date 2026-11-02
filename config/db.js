const mongoose = require('mongoose');

const connectDB = async() => {
    if(!process.env.MONGO_URI) {
        console.error('Connectiong string is missing');
        process.exit(1);
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database is connected successfully', conn.connection.host);
    }
    catch(err) {
        console.error('cant connect to the database', err.message);
    }
}

module.exports = connectDB;