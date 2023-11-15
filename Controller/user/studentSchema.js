const joi=require('joi')
module.exports={
    createStudent:joi.object().keys({
      firstName:joi.string().required(),
      lastName:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().required(),
        userID:joi.number().required(),
        class:joi.string().required(),
        department:joi.string().required(),
    }),
    deleteStudent:joi.object().keys({
        id:joi.number().required()
    }),
    updateStudent:joi.object().keys({
        id:joi.number().required(),
        firstName:joi.string().required(),
        lastName:joi.string().required(),
          email:joi.string().email().required(),
          password:joi.string().required(),
          class:joi.string().required(),
        department:joi.string().required(),
      
    }),
    courseByStudent:joi.object().keys({
      id: joi.number().required(),
    }),
    enrollStudent: joi.object().keys({
      cousreID: joi.number().required(),
      studentID: joi.number().required(),
    }),

}