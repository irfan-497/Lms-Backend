const express=require('express')
const router=express.Router()
const courseController=require('../Controller/courseController')
router.post('/createCourse',courseController.createCourse)
module.exports = router;

