const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // change the host to the server's IP address
  user: 'root',
  password: '1234',
  database: 'sys'
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/conta_page.html', (req, res) => {
  res.sendFile(__dirname + '/conta_page.html');
});

app.post('/conta_page.html', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  connection.query(`INSERT INTO contact(name, email) VALUES ('${name}', '${email}')`, (err, results) => {
    if (err) throw err;
    else {
      console.log(results);
      console.log("inserted successfully.");
      res.redirect('/website.html');
    }
  });
});

const port = 5500;
const ip = '127.0.0.1';

app.listen(port, ip, () => console.log(`This app is listening on port ${port} on IP address ${ip}`));
