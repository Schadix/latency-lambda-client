var http = require('http');

var host = 'localhost';
var port = '8192'

module.exports = function(host, port) {
	return {
		sendToLatency:  function(testid, identifier, status) {
			var status = {
				testid: testid,
				identifier: identifier,
				status: status
			};

			statusJSON = JSON.stringify(status);

			var options = {
				host: host,
				port: port,
				path: '/l',
				method: 'POST',
				headers: {
					'Content-Type': "application/json",
					'Content-Length': statusJSON.length
				}
			};

			var req = http.request(options, function(res) {
				res.setEncoding('utf8');
				res.on('data', function(chunk) {
					console.log('Response: ' + chunk);
				});
			});

			req.on('error', function(err) {
				console.log("ERROR: " + err);
				req.end();
			})

			console.log("sending to host: " + statusJSON);
			req.write(statusJSON);
			req.end();
		}

	}
}
