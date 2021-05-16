#!/usr/bin/env node
'use strict';

//  Always load first because of .dot-env
const config = require('./config');
const logger = require('./logger').console;

const createDirectory = require('./createDirectory');

createDirectory();
