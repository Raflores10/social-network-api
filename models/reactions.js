const dayjs = require('dayjs');
const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: dayjs(),
        },
    }
)
// const Reactions = model('reactions', reactionsSchema);

module.exports = reactionSchema;