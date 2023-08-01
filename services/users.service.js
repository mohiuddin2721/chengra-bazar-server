const User = require("../models/User")

exports.getUsersService = async () => {
    const users = await User.find({});
    return users;
}

exports.createUserService = async (userInfo) => {
    // console.log(userInfo)
    const user = await User.create(userInfo);
    return user;
}