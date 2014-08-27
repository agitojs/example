'use strict';

var Agito = require('agito');
var httpProtocol = require('agito-http-protocol');
var httpRedirection = require('agito-http-redirection');
var jsonLoader = require('agito-json-loader');

Agito()
  .use(jsonLoader({
    pattern: 'http://localhost:8080',
    action: {
      name: 'http-redirection',
      options: {
        target: 'https://github.com/agitojs/agito'
      }
    }
  }))
  .use(httpProtocol())
  .use(httpRedirection())
  .start(function() {
    console.log('Listening');
  });
