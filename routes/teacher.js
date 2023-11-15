
var express = require('express');
var router = express.Router();
var teacherController = require('../Controller/teacherController');

router.get("/getTeacher", teacherController.getTeacher);
router.post("/createTeacher", teacherController.createTeacher);
router.put("/updateTeacher", teacherController.updateTeacher);
router.delete("/deleteTeacher", teacherController.deleteTeacher);
router.post("/registerTeacher", teacherController.registerTeacher);
router.get("/coursesByTeacher/:id", teacherController.coursesByTeacher);

module.exports = router;
