const courseService = require("../Service/courseService");
const courseSchema = require("../Controller/user/courseSchema");
module.exports = {
  getCourse: async (req, res) => {
    const course = await courseService.getCourse();
    res.send(course);
  },
  createCourse: async (req, res) => {
    try {
      const { error, value } = courseSchema.createCourse.validate(req.body);
      if (error) {
        res.send(error.details[0].message);
      } else {
        const course = await courseService.createCourse(value);
        res.send(course);
      }
      res.send("errors");
    } catch (error) {
      console.log(error);
    }
  },

  updateCourse: async (req, res) => {
    try {
      const courseId = Number(req.params.id);
      const { error, value } = coureSchema.updateCourse.validate(req.body);
      if (error) {
        res.send(error.details[0].message);
      } else {
        const updateCousreData = value;
        const course = await courseService.updateCourse(
          courseId,
          updateCousreData
        );
        res.send(course);
      }
    } catch (error) {
      console.log("an error occurs");
    }
  },

  deleteCourse: async (req, res) => {
    console.log("yes");
    try {
      const { error, value } = coureSchema.deleteCourse.validate({
        id: req.params.id,
      });
      console.log(value);
      if (error) {
        res.send(error.details[0].message);
      } else {
        const course = await courseService.deleteCourse(Number(value.id));
        res.send(course);
      }
    } catch (err) {
      console.log(err);
    }
  },
};
