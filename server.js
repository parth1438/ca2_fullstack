require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

const startServer = () => {
    connectDB();

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`)
    })
}

startServer();

app.use(express.json());
app.use('/api/feedback', feedbackRoutes)