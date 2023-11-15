const { models } = require("../models");
module.exports = {
  getCourse: () => {
    return course;
  },
  createCourse: async (data) => {
    const course = await models.course.create(data);
    return course;
  },
};
