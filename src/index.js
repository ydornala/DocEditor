/*
DocEditor v1.0.0
https://github.com/ydornala/DocEditor
*/
var Quill = require('quill');
var Component = require('./component');

module.exports = Component;
module.exports.default = Component;
module.exports.Quill = Quill;
module.exports.Mixin = require('./mixin');
module.exports.Toolbar = require('./toolbar');
