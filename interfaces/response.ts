import { Static, Type } from "@sinclair/typebox"

const Response = Type.Object({
    status: Type.Boolean(),
    data: Type.Any(),
    message: Type.Optional(Type.String())
})
type ResponseType = Static<typeof Response>

enum OrderByEnums { 'asc' = 1, 'desc' = -1 }
const QueryParamsGetAll = Type.Object({
    sortBy: Type.Optional(Type.String()),
    orderBy: Type.Optional(Type.Enum(OrderByEnums))
})
type QueryParamsGetAllType = Static<typeof QueryParamsGetAll>

const QueryParamsGetById = Type.Object({
    id: Type.String()
})
type QueryParamsGetByIdType = Static<typeof QueryParamsGetById>

const DeleteUserId = Type.Object({
    id: Type.String()
})
type DeleteUserIdType = Static<typeof DeleteUserId>

const UpdateUser = Type.Object({
    id: Type.String(),
    firstName: Type.Optional(Type.String()),
    lastName: Type.Optional(Type.String()),
    email: Type.Optional(Type.String({ format: "email" })),
    phone: Type.Optional(Type.Number())
})
type UpdateUserType = Static<typeof UpdateUser>

export { Response, ResponseType, QueryParamsGetAll, QueryParamsGetAllType, QueryParamsGetById, QueryParamsGetByIdType, OrderByEnums, DeleteUserId, DeleteUserIdType, UpdateUser, UpdateUserType }
