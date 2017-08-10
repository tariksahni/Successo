'use strict';

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/successo');
const db = mongoose.connection;
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});

const port = 3000 || process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/tasks', routes);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

const onStart = (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  );
};

app.listen(process.env.PORT || 3000, onStart);

// module.exports = app;