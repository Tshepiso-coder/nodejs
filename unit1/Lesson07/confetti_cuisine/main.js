const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

//====================================
//SUMMARY FROM Claud.ai

// This is a simple Node.js HTTP server with custom routing. Here's what it does:
// Structure:
// Creates a server on port 3000
// Uses a custom router to handle different routes
// Serves HTML pages, images (PNG/JPG), CSS, and JavaScript files
// Routes:
// GET / → serves index.html
// GET /courses.html → serves courses page
// GET /contact.html → serves contact page
// POST / → serves thanks.html (likely for form submissions)
// GET /graph.png, /people.jpg, /product.jpg → serves images
// GET /confetti_cuisine.css, /bootstrap.css → serves stylesheets
// GET /confetti_cuisine.js → serves JavaScript
// Key observations:
// Repetitive code - Each route follows the same pattern. This could be refactored using middleware or a static file server.
// Missing error handling - No 404 handler for unmatched routes or error handling for file reading.
// Hard-coded file paths - Each file path is specified individually rather than using a general static file serving approach.
// Dependencies - Relies on custom modules (router, contentTypes, utils) which aren't shown here.
//====================================

router.get("/", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
  utils.getFile("views/courses.html", res);
  });

router.get("/contact.html", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
});

router.post("/", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
  utils.getFile("views/thanks.html", res);
});

router.get("/graph.png", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.png);
  utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.jpg);
  utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.jpg);
  utils.getFile("public/images/product.jpg", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.css);
  utils.getFile("public/css/confetti_cuisine.css", res);
});

router.get("/bootstrap.css", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.css);
  utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
res.writeHead(httpStatus.StatusCodes.OK, contentTypes.js);
  utils.getFile("public/js/confetti_cuisine.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on
➥port number: ${port}`);