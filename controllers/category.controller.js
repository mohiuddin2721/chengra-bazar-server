const { getCategoryService, createCategoryService } = require("../services/category.service");

exports.getCategories = async (req, res, next) => {
    try {
        const products = await getCategoryService()

        res.status(200).json({
            status: 'success',
            data: products,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message,
        })
    }
}

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req)
        // console.log(result)
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