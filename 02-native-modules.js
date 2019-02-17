const { port } = require('./server-barebone');
const http = require('http');

const routes = (req, res) => {
  const { url, method } = req;
  console.log(url, method);
  if (url === '/') {
    // res.setHeader('Location', '/'); // for redirection
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>hello! this is a native test server</p>');
    return res.end();
  }
}

const server = http.createServer(routes);

server.listen(port);