const teacher = require("./schemas/teacherSchema");
const user = require("./schemas/userSchema");
const student=require('./schemas/studentSchema')
const course=require('./schemas/courseSchema')
const sequelize = require("../Common/dbconnection");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
  },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
  },
});

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
  },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: {
    name: "userID",
    allowNull: false,
  },
});

student.belongsToMany(course,{through:"student_cousre",foreignKey:"studentID" ,allowNull: false})
course.belongsToMany(student,{through:"student_cousre",foreignKey:"cousreID", allowNull: false})
teacher.belongsToMany(course,{through:"teacher_course",foreignKey:"teacherID"})
course.belongsToMany(teacher,{through:"teacher_course",foreignKey:"courseID"})

const models = sequelize.models;

// const db = {} 
// db.sequelize = sequelize; 

module.exports = {models , sequelize }
