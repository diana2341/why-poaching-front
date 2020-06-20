// const express = require('express');
// const http = require('http');
// const path = require('path');
// let app = express();
// app.use(express.static(path.join(__dirname, 'build')));
// const port = process.env.PORT || '8080';
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port, () => console.log(`Running on localhost:${port}`));
const express = require("express");

const port = process.env.PORT || 8080;
var app = express();

// List of all the files that should be served as-is
let protected = ['transformed.js', 'main.css', 'favicon.ico']

app.get("*", (req, res) => {

  let path = req.params['0'].substring(1)

  if (protected.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}/build/index.html`);
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});