const fs = require('fs').promises;
const path = require('path');
const rootPath = path.dirname(require.main.filename);
const logger = require('./logger').console;

const {
	export: { exportPath }
} = require('./config');
async function createDirectory() {
	const targetPath = path.resolve(rootPath, exportPath);

	try {
		await fs.mkdir(targetPath, { recursive: true });
	} catch (err) {
		if (err.code !== 'EEXIST') {
			logger.error(err.code, err);
		}
	}
}

module.exports = createDirectory;
