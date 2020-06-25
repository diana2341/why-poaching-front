const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  
  app.get('/community', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  app.get('/sources', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  
  app.get('/poachers', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });