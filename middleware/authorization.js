const User = require("../models/User");

module.exports = (...role) => {

    return async (req, res, next) => {
        const email = req.user.email;
        // console.log(email)
        const query = { email: email }
        const user = await User.findOne(query)
        // console.log(user)
        const userRole = user?.role;
        // console.log(userRole)

        if (!role.includes(userRole)) {
            return res.status(403).json({
                status: "fail",
                error: "you are not authorized"
            });
        }

        next();
    }
}