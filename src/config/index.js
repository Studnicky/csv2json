'use strict';
const path = require('path');
const dotenv = require('dotenv');

const rootPath = path.dirname(require.main.filename);
const envPath = path.resolve(rootPath, '../.env');

const envConfig = dotenv.config({
	path: envPath
});

const app = require('./app');
const importConfig = require('./import');
const exportConfig = require('./export');
const parserConfig = require('./parser');
const loggerConfig = require('./logger');

//  Create config from ENV
const config = {
	...app,
	import: importConfig,
	export: exportConfig,
	parser: parserConfig,
	logger: loggerConfig[app.env]
};

module.exports = config;
