// this code tries to manually parse body signal via POST method
const { app, port, listen } = require('./server-barebone');

app.post('/message', (req, res, next) => {
  const body = [];
  req.on('data', chunk => {
    console.log('received data chunk', chunk); // streamed buffers
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body); // link all the chunks together as a full stream
    const result = parsedBody.toString();
    console.log(result); // it is changed to readable text via node native feature
    res.render('response', { response: result });
  });
  next();
})

listen(port);