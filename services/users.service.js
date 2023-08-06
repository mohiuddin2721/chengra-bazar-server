const User = require("../models/User");

exports.getUsersService = async () => {
    const users = await User.find();
    return users;
}

exports.createUserService = async (req) => {
    // console.log(req.body)
    const user = req.body;
    const query = { email: user.email }
    const existingUser = await User.findOne(query)
    if (existingUser) {
        // console.log("existingUser", existingUser)
        return res.send({ message: "user already exist" })
    }
    const result = await User.create(req.body);
    return result;
}

exports.updateUserRoleByIdService = async (userId, body) => {
    // console.log("userId:", userId)
    // console.log("user body:", body)
    const singleUser = await User.findById(userId)
    const result = await singleUser.set(body).save();
    return result;
}

exports.removeUserByIdService = async (userId) => {
    // console.log("userId:", userId)
    const result = await User.deleteOne({ _id: userId });
    return result;
}

exports.getAdminUserService = async (req) => {
    const email = req.params.email;
    const query = { email: email };
    const user = await User.findOne(query)
    const result = { admin: user?.role === "admin" }
    // console.log(result)
    return result;
}

