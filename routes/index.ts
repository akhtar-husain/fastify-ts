import { FastifyInstance, FastifyServerOptions } from 'fastify'
import UserRoutes from './user'

const Routes = async (fastify: FastifyInstance, options: FastifyServerOptions) => {
    fastify.register(UserRoutes, { prefix: '/user' })
}
export default Routes
