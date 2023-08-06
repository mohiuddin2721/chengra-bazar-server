const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
    // console.log("UserInfo from token: ", userInfo)
const payload = {
    email: userInfo.email,
    role: userInfo.role,
};
const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1h", 
})

return token;
}