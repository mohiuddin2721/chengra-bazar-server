const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        // role: userInfo.role,
    };
    // console.log("payload from token: ", payload)
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
    })

    return token;
}