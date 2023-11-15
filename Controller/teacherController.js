
const teacherService = require('../Service/teacherService');
const teacherSchema = require('../Controller/user/teacherSchema');
const teacher = require('../models/schemas/teacherSchema');

module.exports = {
    getTeacher: async (req, res) => {
        const teacher=await teacherService.getTeacher
        res.send(teacher)
    },
    createTeacher: async (req, res) => {
        try {
            const { error, value } = teacherSchema.createTeacher.validate(req.body);
            if (error) {
                res.status(400).send(error.details[0].message);
            } else {
                const teacher = await teacherService.createTeacher(value);
                res.status(201).send(teacher); 
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    } ,
    updateTeacher:async(req,res)=>{
        console.log("yy");
        try{
            const teacherId = Number(req.params.id);
            const {error,value}=teacherSchema.updateTeacher.validate(req.body);
            if(error){
                res.send(error.details[0].message)
            } else{
                const updateTeacherData=value;
              const teacher=  await teacherService.updateTeacher(teacherId,updateTeacherData);
              res.send(teacher)
            }

        }
        catch(error){
console.log("an erro find update teacher");
        }
    },
    deleteTeacher:async(req,res)=>{
        try{
            const {error,value}=teacherSchema.deleteTeacher.validate({  id: req.params.id,})
            if(error){
                res.send(error.details[0].message)
            }else{
                const teacher=await teacherService.deleteTeacher(Number(value.id))
                res.send(teacher)
            }
        }
        catch(error){
            console.log("an erro find delete teacher");
                    }
    },
    
    registerTeacher:async(req,res)=>{
        try {
            const { error, value } = teacherSchema.registerTeacher.validate(req.body);
            if (error) {
                res.status(400).send(error.details[0].message);
            } else {
                const {courseID,teacherID}=value
                const teacher = await teacherService.registerTeacher(courseID,teacherID);
                res.status(201).send(teacher); 
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
},

    coursesByTeacher:async(req,res)=>{
        try{
            const {error,value}=teacherSchema.coursesByTeacher.validate({
                id:req.params.id
            })
            console.log(value.id);
            if(error){
                res.send(error.details[0].message)
            }
            const teacherID=Number(value.id)
            const data=await teacherService.coursesByTeacher(teacherID)
            res.send(data)
        }
        catch(error){
            console.log("error  find");
        }
    }
};
