"use strict";
/*

this middleware can deliver compiled styl css files and minified js files

*/

var
	express   = require('express'),
	css       = require('x-middleware-css'),
	js        = require('x-middleware-js'),
	composite = require('x-middleware-composite');

module.exports=function(directory,extra_stylus_paths){
	
	return composite([
		css(directory,extra_stylus_paths),
		js(directory),
		express.static(directory) // serve the generated static files
	]);
};
