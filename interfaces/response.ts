import { Static, Type } from "@sinclair/typebox"

const Response = Type.Object({
    status: Type.Boolean(),
    data: Type.Any(),
    message: Type.Optional(Type.String())
})

type ResponseType = Static<typeof Response>

export { Response, ResponseType }
