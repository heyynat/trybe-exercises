const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/user');

const createUserSchema = Joi.object({
firstName: Joi.string().required(),
lastName: Joi.string().required(),
email: Joi.string().email().required(),
password: Joi.string().min(6).required(),
});

module.exports = [
    (req, res, next) => {
        const { error } = createUserSchema.validate(req.body);
        
        if (error) return next(error);
        
        next();
        
    },
    rescue(async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body;
        
        if (!UserModel.isValid({ firstName, lastName, email, password })) {
            const err = new Error('Invalid data');
            err.status = 400;
            return next(err);
        }
        
        const newUser = await UserModel.create({ firstName, lastName, email, password });
        
        res.status(201).json(newUser);
    }),
];
