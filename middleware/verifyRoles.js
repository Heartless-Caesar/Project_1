//TODO Find out why 'result' is undefined
const { StatusCodes } = require('http-status-codes')

const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                msg: 'No roles header',
            })
        }
        const rolesArray = [...allowedRoles]

        const result = req.roles
            .map((x) => rolesArray.includes(x))
            .find((val) => val === true)

        if (!result) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ msg: 'Not authorized to access this route' })
        }

        next()
    }
}

module.exports = { verifyRoles }
