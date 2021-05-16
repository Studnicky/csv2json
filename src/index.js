#!/usr/bin/env node
'use strict';

//  Always load first because of .dot-env even if we're not referecing it directly here
const config = require('./config');
const Parser = require('./parser');
const createDirectory = require('./createDirectory');

createDirectory().then(() => {
	const parser = new Parser();
	return parser.parse();
});
