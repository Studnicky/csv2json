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

//  Create config from ENV
const config = {
	...app,
	import: importConfig,
	export: exportConfig[app.env]
};

module.exports = config;
