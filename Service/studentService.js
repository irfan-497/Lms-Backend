const { models } = require("../models");

module.exports = {
  getStudent: () => {
    return students;
  },
  createStudent: async (data) => {
    const student = await models.student.create(data);
    return student;
  },
  // updateStudent:(studentId,updateStudentData)=>{
  //     const studentIndex=students.findIndex((student)=>
  //         student.id==studentId

  //     )
  //     console.log(studentIndex);
  //     if(studentIndex!==-1){
  //         students[studentIndex]={
  //             ...students[studentIndex],...updateStudentData
  //         }
  //         return students
  //     }
  //     return null;
  // },
  updateStudent: async (studentId, updateStudentData) => {
    const student = await models.student.findByPk(studentId);
    if (student) {
      student.update(updateStudentData);
    }

    return student;
  },
  //     deleteStudent:(studentId)=>{
  //         console.log(studentId);
  //         const studentIndex=students.findIndex((student)=>
  //             student.id==studentId
  //         )
  //         if(studentIndex!==-1){
  //             students.splice(studentIndex, 1)
  //         return students
  //     }
  //     return null
  // }
  deleteStudent: async (studentId) => {
    const student = await models.student.findByPk(studentId);

    if (student) {
      student.destroy();
      return "ss";
    }
    return null;
  },
  enrollStudent: async (cousreID, studentID) => {
    const student = await models.student_cousre.create({
      cousreID: cousreID,
      studentID: studentID,
    });
    return student;
  },
  coursesByStudent: async (studentID) => {
    try {
      const courseByStudent = await models.student.findByPk(studentID, {
        include: [
          {
            model: models.user,
          },
          {
            model: models.course,
            through: models.student_course,
          },
        ],
      });

      if (courseByStudent) {
        return courseByStudent;
      } else {
        return "not available";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
