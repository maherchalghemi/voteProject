const mongoose = require('mongoose');
const schema = mongoose.Schema;

let User = new schema ({

    Name: {
        type : String
    },
    LastName: {
        type : String
    },
    NumberOfVote: {
        type : Number
    }
});

module.exports = User ;