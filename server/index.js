const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
// const { h } = require('preact');
// const { renderToString } = require('preact-render-to-string');
// const { Home } = require('../client/src/pages/Home/index.jsx');
/** @jsx h */

// console.log('---HOME', Home);

console.log('---ENV', process.env.NODE_ENV);

const server = new Koa();
const router = new Router();

// Serve static files
server.use(serve(path.join(__dirname, '../client/dist')));

// const html = renderToString( h(Home) );

// const htmlShell = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   ${html}
// </body>
// </html>`

router.get('/', (ctx) => {
  console.log('---HOMEPAGE');
  // ctx.body = htmlShell;
});

server.use(router.routes());

module.exports = server;
