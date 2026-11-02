require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const feedbackRoutes = require('./routes/feedbackRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

const startServer = () => {
    connectDB();

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });
};

startServer();