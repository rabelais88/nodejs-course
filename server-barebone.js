const express = require('express');
import 'dotenv/config';
const port = process.env.MY_PORT;
const app = express();
const pug = require('pug');

app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index');
});

const listen = (_port) => {
  app.listen(_port, () => console.log(`app listening on port ${_port}`));
}

export {
  express,
  port,
  app,
  listen,
}