  const studentService = require("../Service/studentService");
  const studentSchema = require("../Controller/user/studentSchema");
  module.exports = {
    getStudent: async (req, res) => {
      const student = await studentService.getStudent();
      res.send(student);
    },
    createStudent: async (req, res) => {
      try {
        const { error, value } = studentSchema.createStudent.validate(req.body);
        if (error) {
          res.send(error.details[0].message);
        } else {
          const student = await studentService.createStudent(value);
          res.send(student);
        }
        res.send("errors");
      } catch (error) {
        console.log(error);
      }
    },

    updateStudent: async (req, res) => {
      try {
        const studentId = Number(req.params.id);
        const { error, value } = studentSchema.updateStudent.validate(req.body);
        if (error) {
          res.send(error.details[0].message);
        } else {
          const updateStudentData = value;
          const student = await studentService.updateStudent(
            studentId,
            updateStudentData
          );
          res.send(student);
        }
      } catch (error) {
        console.log("an error occurs");
      }
    },

    deleteStudent: async (req, res) => {
      console.log("yes");
      try {
        const { error, value } = studentSchema.deleteStudent.validate({
          id: req.params.id,
        });
        console.log(value);
        if (error) {
          res.send(error.details[0].message);
        } else {
          const student = await studentService.deleteStudent(Number(value.id));
          res.send(student);
        }
      } catch (err) {
        console.log(err);
      }
    },
    enrollStudent:async(req,res)=>{
      try
      {
  const {error,value}=studentSchema.enrollStudent.validate(req.body)
  if(error){
    res.send(error.details[0].message);
    
  }else{
    const{cousreID,studentID}=value
    console.log(value);
    const student=await studentService.enrollStudent(cousreID,studentID)
    res.send(student)
  }
      }
      catch(error){
  console.log(error);
      }
    },
    courseByStudent: async (req, res) => {
      try {
          const { error, value } = studentSchema.courseByStudent.validate({
              id: req.params.id
          });
  
          console.log(value.id);
  
          if (error) {
              res.send(error.details[0].message);
          }
  
          const studentID = Number(value.id);
          const data = await studentService.coursesByStudent(studentID); // Corrected function name
          res.send(data);
      } catch (error) {
          console.log(error);
      }
  }
  };
