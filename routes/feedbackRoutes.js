const express = require('express');
const route = express.Router();
const {addFeedback, getAllFeedbacks, changeStatus} = require('../controllers/feedbackController')

route.post('/', addFeedback);
route.get('/', getAllFeedbacks);
route.patch('/:id', changeStatus);

module.exports = route;
