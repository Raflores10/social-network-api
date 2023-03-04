const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    thoughtText: {
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
    }, 
    reactions:
        [Reaction.schema]
    
});