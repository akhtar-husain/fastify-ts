import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { DeleteUserIdType, QueryParamsGetAllType, QueryParamsGetByIdType, UpdateUserType } from "../interfaces/response"
import { UserType } from "../interfaces/user"
import { OrderByEnums } from "../interfaces/response"

async function addUser(this: FastifyInstance, req: FastifyRequest<{ Body: UserType }>, res: FastifyReply) {
    try {
        let user: UserType = req.body
        const result = await this.mongo.db?.collection("users").insertOne(user)
        return res.status(200).send({ status: true, data: { insertId: result?.insertedId } })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

async function getUsers(this: FastifyInstance, req: FastifyRequest<{ Querystring: QueryParamsGetAllType }>, res: FastifyReply) {
    try {
        const { sortBy, orderBy } = req.query
        const sort: any = {}
        if (sortBy && orderBy) {
            sort[sortBy] = orderBy === OrderByEnums.desc ? -1 : 1
        }
        const result = await this.mongo.db?.collection("users").find().sort(sort).toArray()
        return res.status(200).send({ status: true, data: result })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

async function getUserById(this: FastifyInstance, req: FastifyRequest<{ Params: QueryParamsGetByIdType }>, res: FastifyReply) {
    try {
        const { id } = req.params
        const { ObjectId } = this.mongo
        // console.log("ID", id)
        const result = await this.mongo.db?.collection("users").findOne({ _id: new ObjectId(id) })
        return res.status(200).send({ status: true, data: result })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

async function updateUser(this: FastifyInstance, req: FastifyRequest<{Body: UpdateUserType}>, res: FastifyReply) {
    try {
        const user = req.body
        const { ObjectId } = this.mongo
        // console.log("ID", id)
        const result = await this.mongo.db?.collection("users").updateOne({ _id: new ObjectId(user.id) }, {$set: user})
        return res.status(200).send({ status: true, data: result })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

async function deleteUser(this: FastifyInstance, req: FastifyRequest<{ Body: DeleteUserIdType }>, res: FastifyReply) {
    try {
        const { id } = req.body
        const { ObjectId } = this.mongo
        const result = await this.mongo.db?.collection("users").deleteOne({ _id: new ObjectId(id) })
        return res.status(200).send({ status: true, data: result })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Server error" })
    }
}

const UserController = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}

export default UserController
