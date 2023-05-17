const { createProductsService } = require("../services/products.service")

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createProductsService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Successfully data of category inserted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data of category is not inserted',
            error: error.message,
        })
    }
}