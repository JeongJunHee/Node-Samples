const url = require('url');

const urlStr = 'http://idols.com/q?group=EXID&name=하니&since=';

const parsed = url.parse(urlStr);

console.log(parsed);

console.log('protocol : ', parsed.protocol);
console.log('host : ', parsed.host);
console.log('pathname : ', parsed.pathname);
console.log('query : ', parsed.query);

// parseQueryString - defulat = false
var parsed2 = url.parse(urlStr, true);

var query = parsed2.query;

console.log('group : ', query.group);
console.log('name : ', query.name);
console.log('since : ', query.since);
console.log('last : ', query.last);