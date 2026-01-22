const express = require("express");
const clientInfoController = require("./controllers/testController")
const port = 3000;
const app = express();

app.use(express.urlencoded({extended: false}))

app.use(express.json())

//Start your server
app.get("/", (require, response) => {
    //just want confirmation with console.log
    console.log(`URL: ${require.url}`);
    response.send("This is a root route");
})

app.get("/clients", (req, res) => {
    console.log(`URL: ${req.url}`);
    console.log("Clinic site:", req.query);
    res.send("Client is here!");
});

app.get("/clients/:id",clientInfoController.clientInfo);

app.listen(port , () => {
    console.log(`Server running on port ${port}`);
});
