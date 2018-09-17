const mongoose = require('mongoose');
const schema = mongoose.Schema;

let Vote = new schema ({

    title: {
        type : String
    },
    description: {
        type : String
    },
    numberOfVote: {
        type : Number,
        default : 0
    },
    voteyes: {
        type : Number,
        default : 0
    },
    voteNo: {
        type : Number,
        default : 0
    }
});

module.exports = Vote ;