import Joi from "joi";


export const formValidator = Joi.object({
    firstName: Joi.string().min(6).max(20).required(),
    secondName: Joi.string().min(6).max(20).required(),
    phone: Joi.number().required(),
    email: Joi.string().min(10).max(40).required(),
});
