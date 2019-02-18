// this code tries to manually parse body signal via POST method
const { app, port, listen } = require('./server-barebone');

// note for express.js usage
// shouldn't use app.use('/', () => { ... })
// because app.use stands for MIDDLEWARE
// it will override any other routing requests
// and it is loaded in vertical-upward order, overriding child path
// case 1
// app.use('/') // -> this will override /mypath
// app.use('/mypath')
// case 2
// app.use('/mypath')
// app.use('/') // -> this doesn't override '/mypath'

app.post('/message', (req, res, next) => {
  const body = [];
  req.on('data', chunk => {
    console.log('received data chunk', chunk); // streamed buffers
    body.push(chunk);
  });
  req.on('end', () => {
    // this shows what's happening behind bodyParser.js
    const parsedBody = Buffer.concat(body); // link all the chunks together as a full stream
    const result = parsedBody.toString();
    console.log(result); // it is changed to readable text via node native feature
    res.render('response', { response: result });
  });
  next();
})

listen(port);