const csv = require('csv-parser');

const { parser: parserConfig, export: exportConfig } = require('../config');

const logger = require('../logger');
const methods = require('./methods');
const events = require('./events');
class Parser {
	constructor(options = {}) {
		this.logger = logger;
		this.csvParser = csv({ ...parserConfig, ...options });
		this.batchSize = exportConfig.batchSize;
		this.batches = {};
		this.batchNumber = 0;
	}
}

//  Event handler methods
Parser.prototype.headers = events.headers;
Parser.prototype.data = events.data;
Parser.prototype.error = events.error;
Parser.prototype.end = events.end;

//  Utility methods
Parser.prototype.exportBatch = methods.exportBatch;
Parser.prototype.parse = methods.parse;

module.exports = Parser;
