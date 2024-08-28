const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.get('/shout', (req, res) => {
  let name = req.query.name.toUpperCase();
  res.send(name);
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ', ' + year;
  res.send(date);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greeting = 'Namaste, ' + name + '!';
  res.send(greeting);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let formattedAddress = street + ', ' + city + ', ' + state;
  res.send(formattedAddress);
});

app.get('/email', (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;

  let formattedEmail = username + '@' + domain;
  res.send(formattedEmail);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
