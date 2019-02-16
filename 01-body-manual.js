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
    const result = parsedBody.toString();
    console.log(result); // it is changed to readable text via node native feature
    res.render('response', { response: result });
  });
})

listen(port);