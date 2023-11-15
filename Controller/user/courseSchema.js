const joi=require('joi')
module.exports={
    createCourse:joi.object().keys({

        courseTitle:joi.string().required(),
        courseCreditHoure:joi.number().required()
    })
}