var express = require("express");
var router = express.Router();
const studentController = require("../Controller/studentController");

router.get("/getStudent", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);
router.post("/enrollStudent",studentController.enrollStudent)
router.get("/courseByStudent/:id",studentController.courseByStudent)
module.exports = router;
