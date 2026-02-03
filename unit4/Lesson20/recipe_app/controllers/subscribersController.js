const Subcriber = require("../models/subscriber");
const Course = require("../models/courser");

module.exports = {
  showSubscribers: async (req, res) => {
    let subscribers= await Subscriber.find({});

    res.render("subcribers/index", {     
      subcribers: subcribers,
    });
  },
    new: (req, res) => {
    res.render("subcribers/new");
  },
//   create: async (req, res, next) => {
//     try {
//       let subcriberParams = {
//       name: req.bod.name,
//       email:req.body.email,
//       zipCode: req.body.zipCode,
//       }

//       const subscriber = await Subscriber.create(subscriberParams);
//       res.locals.redirect = "/subscriber";
//       res.locals.subscriber = subscriber;
//       next();
//     } catch (error) {
//       console.log(`Error saving subscriber: ${error.message}`);
//       next(error);
//     }
//   },

//   redirectView: (req, res, next) => {
//     let redirectPath = res.locals.redirect;
//     if (redirectPath) res.redirect(redirectPath);
//     else next();
//   },

//    show: async (req, res, next) => {
//     try {
//       let courseId = req.params.id;
//       const course = await Course.findById(courseId);
//       res.locals.course = course;
//       next();
//     } catch (error) {
//       console.log(`Error fetching user by ID: ${error.message}`);
//       next(error);
//     }
//   },
  
//   showView: (req, res) => {
//   res.render("subcribers/show");
//   },


// edit: async (req, res, next) => {
//   let courseId = req.params.id;
  
//   try {
//     let course = await course.findById(courseId);
//     res.render("subcribers/edit", { course: course });
//   } catch (error) {
//     console.log(`Error fetching course by ID: ${error.message}`);
//     next(error);
//   }
// },

// update: async (req, res, next) => {
//   let courseId = req.params.id;
//   let courseParams = {
//     name: {
//       first: req.body.first,
//       last: req.body.last
//     },
//     email: req.body.email,
//     password: req.body.password,
//     zipCode: req.body.zipCode
//   };
  
//   try {
//     let course = await Subscriber.findByIdAndUpdate(courseId, { $set: courseParams });
//     res.locals.redirect = `/courses/${courseId}`;
//     res.locals.course = course;
//     next();
//   } catch (error) {
//     console.log(`Error updating course by ID: ${error.message}`);
//     next(error);
//   }
// },


  
//   delete: (req, res, next) => {
//   let userId = req.params.id;
//     User.findByIdAndDelete(courseeId) 
//   .then(() => {
//   res.locals.redirect = "/coursees";
//   next();
//   })
//   .catch(error => {
//   console.log(`Error deleting coursee by ID: ${error.message}`);
//   next();
//   });
//   }
  
};