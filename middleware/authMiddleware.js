const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ msg: 'No auth header found' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)

        console.log('Auth middleware ' + user)

        //TODO this roles variable causes an error, investigate why
        //const roles = Object.values(user.role)

        //Auth header sending the email and user role
        req.user = user.UserInfo.email
        //req.roles = user.UserInfo.roles

        next()
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            msg: 'Something went wrong in auth verification middleware',
        })
    }
}

module.exports = { authMiddleware }
