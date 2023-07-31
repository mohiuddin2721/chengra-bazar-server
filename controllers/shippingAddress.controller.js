const {
    getShippingAddressByEmailService,
    createShippingAddressService,
    updateShippingAddressByIdService,
} = require("../services/shippingAddress.service")

exports.getShippingAddressByEmail = async (req, res, next) => {
    try {
        // console.log(req.query)
        const address = await getShippingAddressByEmailService(req.query)
        res.status(200).json({
            status: 'success',
            data: address,
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
        // console.log(req)
        const result = await createShippingAddressService(req)
        // console.log("controller",result)
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

exports.updateShippingAddressById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateShippingAddressByIdService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'Data updated successfully',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: `Failed to update data`,
            error: error.message,
        })
    }
}