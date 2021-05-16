'use strict';

const { BATCH_SIZE = '1000', EXPORT_PATH = 'output', FILE_NAME = 'report' } = process.env;

const parsedBatchSize = parseInt(BATCH_SIZE, 10);

module.exports = {
	exportPath: EXPORT_PATH,
	fileName: FILE_NAME,
	batchSize: Number.isNaN(parsedBatchSize) ? 1000 : parsedBatchSize
};
