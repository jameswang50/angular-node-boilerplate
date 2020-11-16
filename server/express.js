'use strict';

module.exports = function(app) {

  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  
  // Get our API routes
  const api = require('./routes/api');

  // Parsers for POST data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  // Set our api routes -  basic routing
  app.use('/api', api);

  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);

};