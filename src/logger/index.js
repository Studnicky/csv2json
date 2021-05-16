'use strict';

const cmd = {
	clear: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	underscore: '\x1b[4m',
	blink: '\x1b[5m',
	reverse: '\x1b[7m',
	hidden: '\x1b[8m',
	fBlack: '\x1b[30m',
	fRed: '\x1b[31m',
	fGreen: '\x1b[32m',
	fYellow: '\x1b[33m',
	fBlue: '\x1b[34m',
	fMagenta: '\x1b[35m',
	fCyan: '\x1b[36m',
	fWhite: '\x1b[37m',
	bBlack: '\x1b[40m',
	bRed: '\x1b[41m',
	bGreen: '\x1b[42m',
	bYellow: '\x1b[43m',
	bBlue: '\x1b[44m',
	bMagenta: '\x1b[45m',
	bCyan: '\x1b[46m',
	bWhite: '\x1b[47m'
};

module.exports = {
	console: {
		trace: (title, ...args) => {
			console.debug(`${cmd.fWhite}${cmd.bCyan}${title}${cmd.clear}`, ...args);
		},
		debug: (title, ...args) => {
			console.debug(`${cmd.fWhite}${cmd.bBlue}${title}${cmd.clear}`, ...args);
		},
		info: (title, ...args) => {
			console.info(`${cmd.fWhite}${cmd.bGreen}${title}${cmd.clear}`, ...args);
		},
		warn: (title, ...args) => {
			console.warn(`${cmd.fBlack}${cmd.bYellow}${title}${cmd.clear}`, ...args);
		},
		error: (title, ...args) => {
			console.error(`${cmd.fBlack}${cmd.bRed}${title}${cmd.clear}`, ...args);
		},
		fatal: (title, ...args) => {
			console.error(`${cmd.fBlack}${cmd.bMagenta}${title}${cmd.clear}`, ...args);
		}
	},
	silent: {
		trace: () => {},
		debug: () => {},
		info: () => {},
		warn: () => {},
		error: () => {},
		fatal: () => {}
	}
};
