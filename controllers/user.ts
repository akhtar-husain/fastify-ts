import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { UserType } from "../interfaces/user"

async function addUser(this: FastifyInstance, req: FastifyRequest<{ Body: UserType }>, res: FastifyReply) {
    try {
        let user: UserType = req.body
        const result = await this.mongo.db?.collection("users").insertOne(user)
        return res.status(200).send({ status: true, data: { insertId: result?.insertedId } })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

const UserController = {
    addUser
}

export default UserController
