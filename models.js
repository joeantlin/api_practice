const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
var Task = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        minlength: 2
    },
    description: { 
        type: String, 
        minlength: 5,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mongoose.model('Task', Task);