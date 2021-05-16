async function error(err) {
	//  If this were running as a service, we might include something like an ELK stack instance and log out here
	//  Pass in the instance details, the batch number, the model ref, etc and create a dead-letter-queue for inspection
	this.logger.error(`${this.constructor.name}.error`, err);
}

module.exports = error;
