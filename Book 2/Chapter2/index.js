const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/contact.html'))
} );

app.get('/users', (req, res) => {
    res.json({"users":[{'lname': 'bhenya', 'fname':'marcia'},
      {'lname': 'molapisi', 'fname':'vusi'}  
    ] });
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});