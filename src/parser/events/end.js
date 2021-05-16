async function end() {
	//	Export any remaining batch
	await this.exportBatch;
	this.logger.trace(`${this.constructor.name}.end`, 'Complete');
}

module.exports = end;
