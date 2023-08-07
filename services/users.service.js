const User = require("../models/User");

exports.getUsersService = async () => {
    const users = await User.find();
    console.log('users', users)
    return users;
}

exports.createUserService = async (req) => {
    // console.log(req.body)
    const user = req.body;
    const query = { email: user.email }
    console.log("query from create user", query)
    const existingUser = await User.findOne(query)
    if (existingUser) {
        // console.log("existingUser", existingUser.role)
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
    // console.log("email", email)
    const query = { email: email };
    // console.log("query", query)
    const user = await User.findOne(query)
    // console.log("userRole", user?.role)
    const result = { admin: user?.role === "admin" }
    // console.log(result)
    return result;
}

exports.getStoreManagerUserService = async (email) => {
    const query = { email: email };
    // console.log("query", query);
    const user = await User.findOne(query);
    // console.log("user", user)
    const result = { storeManager: user?.role === "store-manager" };
    // console.log(result);
    return result;
};
