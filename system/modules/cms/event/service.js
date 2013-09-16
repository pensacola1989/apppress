var mongoose = require('../../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Event = require('./model').Event;
var EventModel = mongoose.model('Event', Event);

