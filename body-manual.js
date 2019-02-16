// this code tries to manually parse body signal via POST method
import { app, port, express, listen } from './server-barebone';

app.post('/message', (req, res) => {
  const body = [];
  req.on('data', chunk => {
    console.log('received data chunk', chunk); // streamed buffers
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body); // link all the chunks together as a full stream
    console.log(parsedBody.toString()); // it is changed to readable text via node native feature
    // since the render function is not fully asynchronous in express 4.x
    // the message is separately displayed in console
  });
  res.render('response', { response: 'message is successfully sent!'})
})

listen(port);