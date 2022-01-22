import fastify, { FastifyInstance } from 'fastify'
import * as dotenv from 'dotenv'

import Routes from './routes/'
import MongoDBConn from './plugins/mongodb'

dotenv.config()
const server: FastifyInstance = fastify({ logger: { level: 'info'} })

server.get('/', async (request, reply) => {
    return 'Welcome to fastify...\n'
})

// Plugins
server.register(MongoDBConn)

// Routes
server.register(Routes)

// Start server
server.listen(3000, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

export default server
