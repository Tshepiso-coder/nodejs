// const courses = [
//  {
//  title: "Event Driven Cakes",
//  cost: 50
// },
//  {
//  title: "Asynchronous Artichoke",
//  cost: 25
// },
//  {
//  title: "Object Oriented Orange Juice",
//  cost: 10
// }];

const courses = require("../models/course");

module.exports = {
  showCourses: async (req, res) => {

    let courses = await Course.find();

    res.render("courses/index", {     
      courses: courses,
    });
  },
    new: (req, res) => {
    res.render("courses/new");
  },
  create: async (req, res, next) => {
    try {
      let userParams = {
      title: req.body.title,
      description: req.body,
      cost: req.body.cost,
      items: req.body.items,
      zipCode: req.body.zipCode
      }

      const course = await Course.create(courseParams);
      res.locals.redirect = "/course";
      res.locals.course = course;
      next();
    } catch (error) {
      console.log(`Error saving course: ${error.message}`);
      next(error);
    }
  },

  redirectView: (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if (redirectPath) res.redirect(redirectPath);
    else next();
  },

   show: async (req, res, next) => {
    try {
      let courseId = req.params.id;
      const course = await Course.findById(courseId);
      res.locals.course = course;
      next();
    } catch (error) {
      console.log(`Error fetching user by ID: ${error.message}`);
      next(error);
    }
  },
  
  showView: (req, res) => {
  res.render("courses/show");
  },


edit: async (req, res, next) => {
  let courseId = req.params.id;
  
  try {
    let course = await course.findById(courseId);
    res.render("courses/edit", { course: course });
  } catch (error) {
    console.log(`Error fetching course by ID: ${error.message}`);
    next(error);
  }
},

update: async (req, res, next) => {
  let courseId = req.params.id;
  let courseParams = {
    name: {
      first: req.body.first,
      last: req.body.last
    },
    email: req.body.email,
    password: req.body.password,
    zipCode: req.body.zipCode
  };
  
  try {
    let course = await Course.findByIdAndUpdate(courseId, { $set: courseParams });
    res.locals.redirect = `/courses/${courseId}`;
    res.locals.course = course;
    next();
  } catch (error) {
    console.log(`Error updating course by ID: ${error.message}`);
    next(error);
  }
},


  
  delete: (req, res, next) => {
  let userId = req.params.id;
    User.findByIdAndDelete(courseeId) 
  .then(() => {
  res.locals.redirect = "/coursees";
  next();
  })
  .catch(error => {
  console.log(`Error deleting coursee by ID: ${error.message}`);
  next();
  });
  }
  
};

