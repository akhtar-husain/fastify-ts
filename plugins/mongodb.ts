import fp from 'fastify-plugin'
import FastifyMongo from 'fastify-mongodb'
import { FastifyInstance, FastifyServerOptions } from 'fastify'

const DBConnector = async (fastify: FastifyInstance, options: FastifyServerOptions) => {
    fastify.register(FastifyMongo, {
        url: process.env.MONGO_URI,
        forceClose: true
    })
}

export default fp(DBConnector)
