const express = require('express');
const path = require('path');
const http = require('http');
var router = express.Router();

const publicPath = path.join(__dirname);

const app = express();
const server = http.createServer(app);

// serve angular front end files from root path
app.use('/', express.static(publicPath, {
  redirect: false
}));

// rewrite virtual urls to angular app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('index.html'));
});

// app.use(express.static(publicPath));
app.listen(5678, () => {
  console.log('server started on port 5678');
});