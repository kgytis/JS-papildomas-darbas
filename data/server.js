let jsonServer = require('json-server')
let server = jsonServer.create()
let router = jsonServer.router(require('./db.js')())
let middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
console.log('JSON Server is running')
})