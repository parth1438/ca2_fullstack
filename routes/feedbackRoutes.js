const express = require('express');
const router = express.Router();
const { addFeedback, getAllFeedbacks, changeStatus } = require('../controllers/feedbackController');

router.post('/', addFeedback);
router.get('/', getAllFeedbacks);
router.patch('/:id', changeStatus);

module.exports = router;
