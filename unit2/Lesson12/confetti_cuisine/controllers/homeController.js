// This Node.js code defines course data and three controller functions for 
// handling course-related routes:
// Data:
// courses array contains three course objects, each with a title and cost (ranging from $10-$50)

// Exported Functions:
// showCourses - Renders the "courses" view template, passing the courses array 
// as offeredCourses so it can be displayed on the page

// showSignUp - Renders the "contact" view template (likely a signup form)
// postedSignUpForm - Renders the "thanks" view template (confirmation page after form submission)

// This follows a typical MVC pattern where these controller functions would be connected to 
// routes to handle GET/POST requests for viewing courses and handling user signups.

// Define an array of courses.
const courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

exports.showCourses = (req, res) => {
res.render("courses", {
    offeredCourses: courses,
  });
};

exports.showSignUp = (req, res) => {
res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  console.log(req.body);
res.render("thanks");
};

