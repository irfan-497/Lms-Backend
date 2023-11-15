const userService = require("../Service/userService");
const userSchema = require("../Controller/user/userSchema");
module.exports = {
  getUser: async (req, res) => {
    const user = await userService.getUser();
    res.send(user);
  },
  createUser: async (req, res) => {
    try {
      const { error, value } = userSchema.createUser.validate(req.body);
      if (error) {
        res.send(error.details[0].message);
      } else {
        const user = await userService.createUser(value);
        res.send(user);
      }
      res.send("some error");
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = Number(req.params.id);
      const { error, value } = userSchema.UpdateUser.validate(req.body,{
        abortEarly:false
      });

      if (error) {
        res.send(error.details[0].message);
      } else {
        const updateUserData = value;
        const user = await userService.updateUser(userId, updateUserData);
        res.send(user);
      }
    } catch (err) {
      res.send("An error occurred while updating the user.");
    }
  },
  patchUser: (req, res) => {
    try {
      const userId = Number(req.params.id);
      const { error, value } = userSchema.patchUser.validate(req.body,{
        abortEarly:false
      });

      if (error) {
        res.send(error.details[0].message);
      } else {
        
        const user = userService.patchUser(userId, value);
        res.send(user);
      }
    } catch (err) {
      res.send("An error occurred while updating the user.");
    }
  },
  deleteUser:  async(req, res) => {
    try {
      const { error, value } = userSchema.deleteUser.validate({
        id: req.params.id,
      });
      if (error) {
        res.send(error.details[0].message);
      } else {
        const user = await userService.deleteUser(Number(value.id));
        res.send(user);
      }
    } catch (err) {
      console.log("An error occurred while delete the user.");
    }
  },
};
