const fs = require('fs');
const path = require('path');
const rootPath = path.dirname(require.main.filename);

const { import: importConfig } = require('../../config');

const events = require('../events');

async function parse() {
	const importPath = path.resolve(rootPath, '../', importConfig.importPath);

	const stream = fs.createReadStream(importPath).pipe(this.csvParser);

	//  Register event handlers to stream by name
	for (const event of Object.keys(events)) {
		stream.on(event, async (...args) => {
			const result = await this[event](...args);
			return result;
		});
	}
}

module.exports = parse;
