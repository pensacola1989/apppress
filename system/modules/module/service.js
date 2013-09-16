var mongoose = require('../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Module = require('./model').Module;
var ModuleModel = mongoose.model('Module', Module);

