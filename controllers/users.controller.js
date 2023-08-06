const { getUsersService, createUserService, updateUserRoleByIdService, removeUserByIdService } = require("../services/users.service")
const { generateToken } = require("../utils/token")

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
        const token = generateToken(req.body)
        // console.log("token from controller: ", token)
        const result = await createUserService(req)
        res.status(200).json({
            status: 'success',
            message: 'Successfully signed up',
            data: {
                result,
                token,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Data of user is not inserted',
            error: error.message,
        })
    }
}

exports.updateUserRoleById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateUserRoleByIdService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: "User data has been successfully Updated",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not updated the user data',
            error: error.message,
        })
    }
}

exports.removeUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await removeUserByIdService(id)
        res.status(200).json({
            status: 'success',
            message: "successfully remove the user.",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not remove the user.',
            error: error.message,
        })
    }
}

// exports.getJwt = async (req, res, next) => {

// }