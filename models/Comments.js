const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "Name must be at least 3 characters"],
    },
    rate: {
        type: Number,
        required: true,
        minLength: [1, "minimum 1 star need"],
        maxLength: [5, "maximum 5 star need"],
    },
    review: {
        type: String,
        minLength: [4, "Your comment must be at least 4 characters"],
        maxLength: [200, "Too large comment, keep it within 200 characters"],
    },
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment;