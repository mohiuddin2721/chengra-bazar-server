const { createCommentService, getCommentService } = require("../services/comments.service");

exports.createComment = async (req, res, next) => {
    try {
        const result = await createCommentService(req);
        res.status(200).json({
            status: 'success',
            message: 'comment posted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Error, does not post the comment',
            error: error.message,
        })
    }
}

exports.getComment = async (req, res, next) => {
    try {
        const id = req.query.productId;
        const result = await getCommentService(id);
        res.status(200).json({
            status: 'success',
            message: 'get data successfully',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error.message,
        })
    }
}