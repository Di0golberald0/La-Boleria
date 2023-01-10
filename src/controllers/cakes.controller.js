import { connection } from "../../db/database.js";

export async function cakes(req, res) {
    try {
        const { name, price, image, description } = req.body;

        console.log('checked name')
        const existingCakes = await connection.query(
            `SELECT * FROM cakes WHERE name = $1 `,
            [name]
        );
        console.log(name)
        if (existingCakes.rowCount > 0) {
            console.log('name exists')
            return res.sendStatus(409);
        };
        
        const insertCake = await connection.query(
            `INSERT INTO cakes(
                name, price, image, description)
                VALUES ($1, $2, $3, $4)`,
                [name, price, image, description]
        );
        console.log('insertCake')
        console.log(insertCake)
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}