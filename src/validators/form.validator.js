import Joi from "joi";


export const formValidator = Joi.object({
    firstName: Joi.string().min(6).max(20).required().messages({
        'string.empty': '"firstName" не може бути пустим',
        'string.pattern.base': '"firstName" тільки букви мін 6 макс 20'
    }),
    secondName: Joi.string().min(6).max(20).required(),
    phone: Joi.number().required(),
    email: Joi.string().min(10).max(40).required(),
});
