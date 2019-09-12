function errorHandler(err, req, res, next) {
    let {
        start,
        httpStatus,
        message,
        previousError,
        stack
    } = err
    if (err.message == 'email/password not found') {
            httpStatus = 404
            message = err.message
            res.status(httpStatus).json({
                message
            })

    } else if (err.code == 11000) {
        httpStatus = 400
        message = 'Email is Already Registered'
        res.status(httpStatus).json({
            message
        })
    } else if (err.name == 'JsonWebTokenError') {

        httpStatus = 401
        message = "invalid token"
        res.status(httpStatus).json({
            message
        })

    } else if (err.name == "ValidationError") {
        httpStatus = 400
        message = err.message
        res.status(httpStatus).json({
            message
        })
    } else {
        res.status(httpStatus || 500).json({

            code: httpStatus || 500,
            message,
            data: previousError,
            error: stack
        })
    }
}
module.exports = errorHandler