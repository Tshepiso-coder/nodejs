const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const Course = require("./models/course");
mongoose.connect("mongodb://localhost:27017/recipe_db");

// Subscriber.create({
//   name: "Tshepiso",
//   email: "tshepiso@email.com",
//   zipCode: "12345"
// })
//   .then(subscriber => console.log(subscriber))
//   .catch(error => console.log(error.message));

// let subscriber;

// Subscriber.findOne({
//   name: "Tshepiso"
// }).then(result => {
//   subscriber = result;
//   console.log(subscriber.getInfo());
// });


let testCourse, testSubscriber;
// Course.create( {
//   title: "Tomato Land",
//   description: "Locally farmed tomatoes only",
//   zipCode: 12345,
//   items: ["cherry", "heirloom"]
// }).then(course => testCourse = course);

// Subscriber.findOne({}).then((Subscriber) => (testSubscriber = subscriber));

// testSubscriber.courses.push(testCourse._id);
// testSubscriber.save();

// Subscriber.populate(testSubscriber, "courses").then(subscriber =>
//   console.log(subscriber)
// );

Course.create({
  title: "Tomato23 Land",
  description: "Locally farmed tomatoes only2",
  zipCode: 12345,
  items: ["cherry", "heirloom"]
})
.then(course => {
  return Subscriber.findOne({}).then(subscriber => {
    subscriber.courses.push(course._id);
    return subscriber.save();
  });
})
.then(subscriber => {
  return Subscriber.populate(subscriber, "courses");
})
.then(subscriber => {
  console.log(subscriber);
})
.catch(err => console.error(err));

//==================

// (async () => {
//   const testCourse = await Course.create({
//     title: "Tomato Land",
//     description: "Locally farmed tomatoes only",
//     zipCode: 12345,
//     items: ["cherry", "heirloom"]
//   });

//   const testSubscriber = await Subscriber.findOne({});

//   testSubscriber.courses.push(testCourse._id);
//   await testSubscriber.save();

//   const populatedSubscriber = await Subscriber
//     .findById(testSubscriber._id)
//     .populate("courses");

//   console.log(populatedSubscriber);
// })();
