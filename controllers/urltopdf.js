'use strict';

const urltopdf = require('larviturltopdf');

exports.run = function(req, res, cb) {
	const options = {};

	options.url                   = req.urlParsed.protocol + '//' + req.urlParsed.host + req.urlParsed.pathname.substring(0, req.urlParsed.pathname.length - 4) + req.urlParsed.search;
	options.waitForHtmlReadyClass = true;

	urltopdf(options, function(err, pdfBuffer) {
		if (err) {
			cb(err, req, res, {});
			return;
		}

		res.end(pdfBuffer);
	});
};