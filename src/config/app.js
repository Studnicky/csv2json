'use strict';

//  Top level app-config that is always the same throughout all environments
module.exports = {
	name: process.env.APP_NAME || process.env.npm_package_description,
	description: process.env.npm_package_description || null,
	license: process.env.npm_package_license || 'UNLICENSED',
	contributors: [
		{
			name: process.env.npm_package_contributors_0_name || 'Unknown',
			email: process.env.npm_package_contributors_0_email || 'Unknown@nowhere.com',
			url: process.env.npm_package_contributors_0_url || 'http://not.specified.com'
		}
	],
	version: process.env.npm_package_version || 'Unversioned',
	env: process.env.NODE_ENV
};
