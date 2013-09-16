var mongoose = require('../../../../framework/mongoose');
var http = require('http');
var url = require('url');

var Coupon = require('./model').Coupon;
var CouponModel = mongoose.model('Coupon', Coupon);

