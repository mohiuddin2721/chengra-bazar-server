const {
    getAddCartsService,
    createAddCartsService,
    deleteAddCartsByIdService
} = require("../services/addCarts.service")

exports.getAddCarts = async (req, res, next) => {
    try {
        // console.log(req.query)
        const products = await getAddCartsService(req.query)
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

exports.createAddCart = async (req, res, next) => {
    try {
        const result = await createAddCartsService(req)
        console.log(result)
        res.status(200).json({
            status: 'success',
            message: 'Successfully data inserted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message,
        })
    }
}

exports.deleteAddCartById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const result = await deleteAddCartsByIdService(id)
        console.log(result)
        res.status(200).json({
            status: 'success',
            message: 'Successfully deleted the data',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't delete the data",
            error: error.message,
        })
    }
}