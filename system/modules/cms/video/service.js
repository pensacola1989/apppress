var mongoose = require('../../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Video = require('./model').Video;
var VideoModel = mongoose.model('Video', Video);

