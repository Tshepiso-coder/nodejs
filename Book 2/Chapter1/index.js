const http = require('http');
const port = 3000;
const fs = require('fs');
const homePage = fs.readFileSync('./views/index.html');
const aboutPage = fs.readFileSync('./views/about.html');
const contactPage = fs.readFileSync('./views/contact.html');
const notFoundPage = fs.readFileSync('./views/notfound.html');

const server = http.createServer((req, res) =>{
    if (req.url === '/about')
        res.end(aboutPage);
    else if (req.url === '/contact')
        res.end(contactPage);
    else if (req.url === '/')
        res.end(homePage);
    else {
        res.writeHead(404);
        res.end(notFoundPage)
    };
});
// const server = http.createServer((req, res) =>{
//     console.log(req.url);
//     if (req.url === '/')
//         res.end('The home page');
//     else if (req.url === '/about')
//         res.end('The about page');
//     else if (req.url === '/contact')
//         res.end('The contact page');
//     else {
//         res.writeHead(404);
//         res.end('page not found');
//     };
// // });



server.listen(port, () => {
  console.log(`server running on port: ${port}`);
} 

);
