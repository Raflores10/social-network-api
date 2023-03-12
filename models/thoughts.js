const dayjs = require('dayjs');
const { Schema, Types, model} = require('mongoose');
const reactionSchema = require('./reactions')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: dayjs(),
        },
        username:{
            type: String,
            required:true
        },
        reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
  })
  
  const Thought = model('thoughts', thoughtSchema);
  
  module.exports = Thought;