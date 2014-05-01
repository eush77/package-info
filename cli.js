#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var info = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ info <package-name>');
	console.log('');
	console.log('Example');
	console.log('  $ info pageres');
	console.log('  0.2.3');
}

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

info(input, function (err, version) {
	if (err) {
		console.error(err);
		process.exit(1);
		return;
	}

	console.log(version);
});