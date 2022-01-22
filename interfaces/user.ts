import { Static, Type } from '@sinclair/typebox'

const User = Type.Object({
    firstName: Type.String(),
    lastName: Type.String(),
    email: Type.String({ format: "email" }),
    phone: Type.Optional(Type.Number())
})
type UserType = Static<typeof User>

export { UserType, User }
