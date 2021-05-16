async function data(data) {
	this.logger.trace(`${this.constructor.name}.data`, data);
	//	Create a last-in queue to write out by batch number
	this.batches[this.batchNumber] = this.batches[this.batchNumber] ? this.batches[this.batchNumber] : [];
	this.batches[this.batchNumber].push(data);

	if (this.batches[this.batchNumber].length >= this.batchSize) {
		//	Dispatch the background write out of the previous batch, start the next batch
		this.exportBatch(this.batchNumber);
		++this.batchNumber;
	}
}

module.exports = data;
