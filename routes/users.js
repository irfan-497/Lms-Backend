var express = require("express");
var router = express.Router();
const userController =require('../Controller/userController');
const { getUser } = require('../Controller/userController');
const authController = require("../Common/authController");

router.get("/getUser",userController.getUser),
router.get("/",authController.verifyToken,getUser),
router.post('/login',authController.login)
router.post("/createUser" ,userController.createUser)
router.put("/updateUser/:id" ,userController.updateUser)
router.patch("/patchUser/:id" ,userController.patchUser)
router.delete("/deleteUser/:id" ,userController.deleteUser)

module.exports = router;
