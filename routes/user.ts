import { FastifyInstance, FastifyServerOptions } from "fastify"
import { User, UserType } from '../interfaces/user'
import { DeleteUserId, DeleteUserIdType, QueryParamsGetAll, QueryParamsGetAllType, QueryParamsGetById, QueryParamsGetByIdType, Response, ResponseType, UpdateUser, UpdateUserType } from "../interfaces/response"
import UserController from '../controllers/user'

const UserRoutes = async (fastify: FastifyInstance, options: FastifyServerOptions) => {
    fastify.post<{ Body: UserType, Reply: ResponseType }>("/", { schema: { body: User, response: { 200: Response } } }, UserController.addUser)

    fastify.get<{ Querystring: QueryParamsGetAllType, Reply: ResponseType }>('/', { schema: { querystring: QueryParamsGetAll, response: { 200: Response } } }, UserController.getUsers)

    fastify.get<{Params: QueryParamsGetByIdType, Reply: ResponseType}>('/:id', { schema: { params: QueryParamsGetById, response: {200: Response} } }, UserController.getUserById)

    fastify.put<{ Body: UpdateUserType, Reply: ResponseType }>('/', { schema: { body: UpdateUser, response: {200: Response} } }, UserController.updateUser)

    fastify.delete<{Body: DeleteUserIdType, Reply: ResponseType}>('/', { schema: { body: DeleteUserId, response: {200: Response} } }, UserController.deleteUser)
}
export default UserRoutes
