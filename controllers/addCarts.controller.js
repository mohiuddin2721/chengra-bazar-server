
exports.getAddCarts = async (req, res, next) => {
    try {
        const products = await getAddCartsService(req)
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