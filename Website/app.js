const express = require('express');
const app = express();
const port = 5000;
const sendMail = require("./sendMail");

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/mail", sendMail);
const start = async () => {
    try {
        await app.listen(port);
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.error(`Error starting server: ${error.message}`);
    }
};

start();
