const {models} = require('../models');
const student = require('../models/schemas/studentSchema');

module.exports = {
    getTeacher: () => {
      
        return teacher;
    },
    createTeacher: async (data) => {
        const teacher = await models.teacher.create(data);
        return teacher;
    },
    updateTeacher:async(teacherId, updateTeacherData)=>{
        const teacher=await models.teacher.findByPk(teacherId)
        if(teacher){
            teacher.update(updateTeacherData)
        }
        return teacher
    },
    deleteTeacher:async(teacherId)=>
    {
        const teacher=await models.teacher.findByPk(teacherId)
        if(teacher){
            teacher.destroy()
            return "destroy"
        }
        return null
    },
    registerTeacher: async (courseID,teacherID) => {
        const teacher = await models.teacher_course.create({
            courseID:courseID,
            teacherID:teacherID
        });
        return teacher;
    },
    
    coursesByTeacher:async(teacherID)=>{
        try {
            const coursesByTeacher=await models.teacher.findByPk(teacherID,{
                include:[
                    {
                        model:models.user,
                        
                    },
                    {
                        model:models.course,
                        through:models.teacher_course
                    }
                ]
            })
            if(coursesByTeacher){
                return coursesByTeacher
            }
            else{
                return "not available"
            }
        } catch (error) {
            console.log(error);
        }
    }
};
