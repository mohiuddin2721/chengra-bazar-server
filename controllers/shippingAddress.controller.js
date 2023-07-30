const {
    getShippingAddressByEmailService,
    createShippingAddressService,
} = require("../services/shippingAddress.service")

exports.getShippingAddressByEmail = async (req, res, next) => {
    try {
        // console.log(req.query)
        const products = await getShippingAddressByEmailService(req.query)
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

exports.createShippingAddress = async (req, res, next) => {
    try {
        const result = await createShippingAddressService(req)
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