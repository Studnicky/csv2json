'use strict';

const { EXPORT_PATH = 'dist', FILE_NAME = 'output' } = process.env;

/*
 * 	Not using here, but useful sometimes
 *  Statics might need to be different per runtime env
 * Not all config should be exposed outside the application
 */
module.exports = {
	development: {
		exportPath: EXPORT_PATH,
		fileName: FILE_NAME
	},
	test: {
		exportPath: EXPORT_PATH,
		fileName: FILE_NAME
	},
	staging: {
		exportPath: EXPORT_PATH,
		fileName: FILE_NAME
	},
	production: {
		exportPath: EXPORT_PATH,
		fileName: FILE_NAME
	}
};
