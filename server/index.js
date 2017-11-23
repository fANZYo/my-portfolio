require('babel-core/register')({ presets: ['es2015', 'react'] });

const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const react = require('react');
const reactDomServer = require('react-dom/server');
const reactRouter = require('react-router-dom');

const renderToString = reactDomServer.renderToString;
const match = reactRouter.match;
const RouterContext = reactRouter.RouterContext;

const app = express();

app.server = http.createServer(app);
app.use(express.static(path.join(__dirname, '../build')));

app.get('/projects', (req, res) => {
  res.send('projects');
});

app.get('/blog', (req, res) => {
  res.send('blog');
});

app.server.listen( 8080 );
console.log('Listening on http://localhost:8080...');
