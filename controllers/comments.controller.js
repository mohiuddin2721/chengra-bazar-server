
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

    } catch (error) {

    }
}