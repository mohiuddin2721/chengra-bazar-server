const Comment = require("../models/Comments");


exports.createCommentService = async (req) => {
    const data = req.body;
    // console.log(data)
    const comment = await Comment.create(data);
    return comment;
}
exports.getCommentService = async (id) => {
    const query = { productId: id }
    const comments = await Comment.find(query);
    return comments;
}