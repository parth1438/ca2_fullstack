const Feedback = require('../models/feedbackSchema');
const asyncHandler = require('../utils/asyncHandler');
const isValidString = require('../utils/isValidString');
const isValidNumber = require('../utils/isValidNumber');

exports.addFeedback = asyncHandler(async(req, res) => {
    const {studentName, courseName, message, rating} = req.body;

    if(!isValidString(studentName) || !isValidString(courseName) || !isValidString(message) || isValidNumber(rating)) {
        return res.status(400).json({
            message : 'please provide valid details'
        })
    }

    

})