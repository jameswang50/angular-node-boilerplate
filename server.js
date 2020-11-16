'use strict';

// Get dependencies
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
require(__dirname + '/server/express')(app);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Listen on provided port, on all network interfaces.
 */
const port = app.get('port');
server.listen(port, () => console.log(`API running on localhost:${port}`));