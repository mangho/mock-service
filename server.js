const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const db = require('./dbj.js')
server.use(jsonServer.rewriter({
    '/v1/*': '/$1',
}))
server.use(middlewares)
server.use(jsonServer.router(db))
server.listen(8091, () => {
    console.log('JSON Server is running')
})