const User = require("../models/User")

exports.getUsersService = async () => {
    const users = await User.find({});
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