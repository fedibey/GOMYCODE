const {body ,validationResult } = require('express-validator')

exports.validationRegister = [
    body('email','Bad email format').isEmail(),
    body('password','your passwordmust contain 6 char').isLength({min : 6})
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }
    next()
}