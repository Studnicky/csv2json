async function end() {
	//	Export any remaining batch
	await this.exportBatch(this.batchNumber);
	this.logger.trace(`${this.constructor.name}.end`, 'Complete');
}

module.exports = end;
