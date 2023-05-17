const { getUsersService, createUserService } = require("../services/users.service")

exports.getUser = async (req, res, next) => {
    try {
        const users = await getUsersService()

        res.status(200).json({
            status: 'success',
            data: users,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message,
        })
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const result = await createUserService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Successfully data of user inserted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data of user is not inserted',
            error: error.message,
        })
    }
}