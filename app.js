const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
  }
  
  else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
  }
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })