const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fisi');

var Press = mongoose.model('Press', {
    name:{
        type: String,
        required: true
    },
    summery: {
        type: String,
        required: true
    },
    body: String,
    tag: String,
    user: {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    create_on : {
        type : Date,
        default : Date.now 
    }
});

module.exports = Press;
