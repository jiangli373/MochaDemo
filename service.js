'use strict';
const request = require('request');

module.exports = function (url, callback) {
  request.get(url, function(err,response, body){
     callback(null, body);
  });
}