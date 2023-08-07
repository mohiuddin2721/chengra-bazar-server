const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];
        // console.log('req.headers', req.headers)
        // console.log('req.headers?.authorization', req.headers?.authorization)
        // console.log('token', token)
        if (!token) {
            return res.status(401).json({
                status: "fail",
                error: "unauthorized access"
            });
        }

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
        // console.log('decoded', decoded)
        req.user = decoded;
        // console.log('req.user', req.user)
        next();

    } catch (error) {
        res.status(403).json({
            status: "fail",
            error: "unauthorized access"
        });
    }
}