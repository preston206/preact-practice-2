const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

console.log('---ENV', process.env.NODE_ENV);

const server = new Koa();

// Serve static files
server.use(serve(path.join(__dirname, '../client/dist')));

module.exports = server;
