const Feedback = require('../models/feedbackSchema');
const asyncHandler = require('../utils/asyncHandler');
const isValidString = require('../utils/isValidString');
const isValidNumber = require('../utils/isValidNumber');
const mongoose = require('mongoose');

exports.addFeedback = asyncHandler(async(req, res) => {
    const {studentName, courseName, message, rating} = req.body;

    if(!isValidString(studentName) || !isValidString(courseName) || !isValidString(message) || !isValidNumber(rating)) {
        return res.status(400).json({
            message : 'please provide valid details'
        })
    }

    if(rating < 1 || rating > 5) {
        return res.status(403).json({
            message : 'Rating should be between 1 to 5'
        })
    }

    const feedback = await Feedback.create({
        studentName,
        courseName,
        message,
        rating
    })

    res.status(201).json({
        message : 'Feedback added successfully',
        feedback
    })

})

exports.getAllFeedbacks = asyncHandler(async(req, res) => {
    const {limit, page} = req.query;

    const pageNumber = page !== undefined?Number(page): 1;
    let limitNumber = limit !== undefined?Number(limit): 10;

    if(!isValidNumber(pageNumber) || !isValidNumber(limitNumber)) {
        return res.status(400).json({
            message : 'please provide valid details'
        })
    }

    limitNumber = limitNumber > 50 ? 50 : limitNumber;

    const skip = (pageNumber - 1)*limitNumber;

    const feedbacks = await Feedback.find().skip(skip).sort({createdAt : -1}).limit(limitNumber);
    const totalFeedback = await Feedback.countDocuments();
    const totalPages = Math.ceil(totalFeedback/limitNumber);

    return res.status(200).json({
        data : feedbacks,
        metadata : {
            totalFeedback,
            totalPages,
            pageNumber,
            limitNumber
        }
    })

})

exports.changeStatus = asyncHandler(async(req, res) => {
    const{id} = req.params;

    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({
            message : 'Invalid feedback id'
        })
    }
    
    const feedback = await Feedback.findByIdAndUpdate(id, {status : false}, {new : true});
    if(!feedback) {
        return res.status(404).json({
            message : 'Feedback not found'
        })
    }

    res.status(200).json({
        message : 'Feedback status changed successfully',
        feedback
    })
})