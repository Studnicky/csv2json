async function headers(headers) {
	//  The headers row might be used for runtime model evaluation as inferred by structures to set options for proceeding methods
	//  It might set a specific database table or select a different flow based on what data model we are parsing
	this.logger.info(`${this.constructor.name}.header`, `Setting header row: ${headers}`);
}

module.exports = headers;
