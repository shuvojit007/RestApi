const fastify = require('fastify')({
    logger: true
})

// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)


require('./config/config')

const routes = require("./routes/index")
routes.forEach((route, index) => {
    fastify.route(route)
})

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})


// Run the server!

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()