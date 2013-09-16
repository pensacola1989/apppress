var mongoose = require('../../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Album = require('./model').Album;
var AlbumModel = mongoose.model('Album', Album);

