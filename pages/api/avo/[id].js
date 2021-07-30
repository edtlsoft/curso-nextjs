import DB from '../../../database/db'

const Avo = async (request, response) => {
    const db = new DB()
    const avoId = request.query.id

    const entry = await db.getById(avoId)

    response.status(200).json(entry)
}

export default Avo