var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey ='27f6d05c9eaa42388df030fad4486484';
var sentryApp ='91708';
var sentryURL ='https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,

  }
}).install();



ReactDOM.render(
  routes,
  document.getElementById('app')
);
