const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    studentName : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },

    courseName : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },

    message : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    }, 

    rating : {
        type : Number,
        required : [true, 'should be between 1 to 5'],
    },
    status : {
        type : Boolean,
        default : true
    }
}, 
 {timestamps : true}
)

module.exports = mongoose.model('Feedback', feedbackSchema);