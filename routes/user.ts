import { FastifyInstance, FastifyServerOptions } from "fastify"
import { User, UserType } from '../interfaces/user'
import UserController from '../controllers/user'
import { Response, ResponseType } from "../interfaces/response"

const UserRoutes = async (fastify: FastifyInstance, options: FastifyServerOptions) => {
    fastify.post<{ Body: UserType, Reply: ResponseType }>("/", { schema: { body: User, response: { 200: Response } } }, UserController.addUser)
}
export default UserRoutes
