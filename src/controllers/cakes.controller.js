import { connection } from "../../db/database.js";

export async function cakes(req, res) {
    try {
        const { name, price, image, description } = req.body;

        const existingCakes = await connection.query(
            `SELECT * FROM cakes WHERE name = $1 `,
            [name]
        );
        
        if (existingCakes.rowCount > 0) {
            return res.status(409).send('name alredy exists');
        };
        
        const insertCake = await connection.query(
            `INSERT INTO cakes(
                name, price, image, description)
                VALUES ($1, $2, $3, $4)`,
                [name, price, image, description]
        );

        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}