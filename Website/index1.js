
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // change the host to the server's IP address
    user: 'root',
    password: '1234',
    database: 'xyz'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/Login_page.html', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/Login_page.html', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    connection.query('SELECT * FROM USERS WHERE email = "' + email + '" AND password = "' + password + '"', (err, results) => {
        if (err) throw err;
        else {
            console.log(results);
            console.log("Credentials Matched.");
            res.redirect('/website.html');
        }
    });
    


    connection.end();
});

// const port = 5500;

// app.listen(port, '192.168.0.10', () => console.log(`This app is listening on port ${port} on server '192.168.0.10'`));

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
