const joi = require("joi");
module.exports = {
  createUser: joi.object().keys({
    // id: joi.number().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password:joi.string().required()
  }),
  deleteUser: joi.object().keys({
    id: joi.number().required(),

  }),
  UpdateUser: joi.object().keys({
    id: joi.number().required(),
    firstName: joi.string().required(),
    lastName: joi.string().optional(),
    email: joi.string().email().required(),
    password:joi.string().required()
  }),
  patchUser: joi.object().keys({
    id: joi.number().required(),
    name: joi.string(),
    email: joi.string()
  }),
};



