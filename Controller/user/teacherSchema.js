const joi = require("joi");
module.exports = {
  createTeacher: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    experince: joi.string().required(),
    department: joi.string().required(),
    userID: joi.number().required(),
  }),
  deleteTeacher: joi.object().keys({
    id: joi.number().required(),
  }),
  updateTeacher: joi.object().keys({
    id: joi.number().required(),
    firstName: joi.string().required(),
    lastName: joi.string().optional(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    experince: joi.string().required(),
    department: joi.string().required(),
  }),
  coursesByTeacher: joi.object().keys({
    id: joi.number().required(),
  }),

  registerTeacher: joi.object().keys({
    courseID: joi.number().required(),
    teacherID: joi.number().required(),
  }),
};

