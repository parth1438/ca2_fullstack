const express = require('express');
const route = express.Router();
const {addFeedback} = require('../controllers/feedbackController')

route.post('/', addFeedback);

module.exports = route;