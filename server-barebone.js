// `import` is not used because it is not natively supported in some node versions unless it's for mac or .mjs
const express = require('express');
require('dotenv').config();
const port = process.env.MY_PORT;
if (!port) throw Error('please create .env file, in accordance with .envsample');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug')
app.get('/', (req, res, next) => {
  res.render('index');
  return next();
});

const listen = (_port) => {
  app.listen(_port, () => console.log(`app listening on port ${_port}`));
}

module.exports = {
  express,
  port,
  app,
  listen,
}