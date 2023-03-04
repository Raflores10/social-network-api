const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: String,
        required: true,
        maxlength: 255
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        defult: Date.now,
        get: (createdAtVal) => dataFormat(createdAtVal)
    }
    
});

const Reaction = mongoose.model('Reaction', reactionSchema);
module.exports = Reaction;