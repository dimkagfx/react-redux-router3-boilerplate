let isProduction = false;

let isStaging = false;


if (isProduction) {
	module.exports = require('./constants.prod');
} else if (isStaging) {
	module.exports = require('./constants.staging');
} else {
	module.exports = require('./constants.dev');
}
