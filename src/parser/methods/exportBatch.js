const fs = require('fs');
const path = require('path');

const { export: exportConfig } = require('../../config');

const rootPath = path.dirname(require.main.filename);

//	FS has an async implementation but it's not considered stable; cb-wrap is safer
function exportBatch(batchNumber) {
	const { exportPath, fileName } = exportConfig;

	const exportContents = JSON.stringify(this.batches[batchNumber], null, 4);
	const exportName = `${fileName}-${batchNumber}`;
	const exportFilePath = path.resolve(rootPath, '../', exportPath, exportName);

	//	This could have just as well been an output stream, but this is more realistic for most systems I have worked with
	return new Promise((resolve, reject) => {
		fs.writeFile(exportFilePath, exportContents, (err, result) => {
			// Not going so far as error handling but this should ideally create a DLQ
			if (err) {
				this.logger.error(`Batch Write ${batchNumber} Failed`, err);
				reject(err);
			} else {
				//	Clear batch mem; there is a risk of the stream running overflow here
				//	It really depends on the outgoing filesystem but reducing batch count will alleviate most issues
				//	Just have to keep the buffer under the nodejs mem max
				// 	This would likely be running inside of a job queue feeding of Kafka/SNS so no biggie
				delete this.batches[batchNumber];
				resolve(result);
			}
		});
	});
}

module.exports = exportBatch;
