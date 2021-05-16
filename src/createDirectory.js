const fs = require('fs');
const path = require('path');
const rootPath = path.dirname(require.main.filename);
const logger = require('./logger');

const {
	export: { exportPath }
} = require('./config');
//	While there is an async fs implementation, it's not considered stable.  cb-wrap is safer.
function createDirectory() {
	const targetPath = path.resolve(rootPath, '../', exportPath);

	return new Promise((resolve, reject) => {
		fs.mkdir(targetPath, (err) => {
			if (err) {
				if (err.code !== 'EEXIST') {
					logger.error(`Create Directory failed with ${err.code}`, err);
					return reject(err);
				}
			}
			logger.info(`Output Directory Created`, `${targetPath}`);
			resolve();
		});
	});
}

module.exports = createDirectory;
