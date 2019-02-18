const { app, port, listen } = require('./server-barebone');
const router = require('./router/samplerouter');
app.use(router);

// always watch out for load order
app.use((req, res, next) => {
  res.render('response', { response: 'wrong page 404' });
  return next();
});

listen(port);