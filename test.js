var uuid  = require('uuid');
var l = require('./latency-lambda-client.js')('localhost', 8192);
l.sendToLatency('testid', uuid.v4(), 'and the status');
