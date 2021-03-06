const http = require('http');
const https = require("https");
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// app.server = http.createServer(app);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set cors for dev REMOVE IN PRODUCTION
// app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // next();
// });

// Medium.com options
const username = 'williamiehl';
const options = {
  'method': 'GET',
  'hostname': 'medium.com',
  'port': null,
  'path': `/@${username}?format=json`,
  'headers': {
    'cache-control': 'no-cache',
  }
};

// Return a list of posts from medium.com
app.get('/blogposts', (req, res) => {
  res.setHeader('Content-type', 'application/json');

  const xhr = https.request(options, (ress) => {
    const chunks = [];

    ress.on('data', (chunk) => {
      chunks.push(chunk);
    });

    ress.on('end', () => {
      const body = Buffer.concat(chunks);
      const bb = JSON.parse(body.toString().replace('])}while(1);</x>', ''));
      res.status(200).send(JSON.stringify(bb.payload.references.Post));
    });
  });

  xhr.end();
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
