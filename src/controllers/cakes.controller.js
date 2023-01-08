import { connection } from "../../db/database.js";

export async function cakes(req, res) {
    try {
        const cake = req.body;
        console.log(cake)
        console.log('checking cake')
        if (cake.name.lenght < 2) {
            console.log('name error')
            return res.sendStatus(400);
        }
        
        const existingCakes = await connection.query(
            `SELECT * FROM cakes WHERE name = $2 `,
            [cake.name]
        );
      
        if (existingCakes.rowCount > 0) {
            console.log('name exists')
            return res.sendStatus(409);
        }
        
        if (cake.price < 1) {
            console.log('price error')
            return res.sendStatus(400);
        }

        if(cake.description.lenght > 0 && cake.description.type !== String) {
            console.log('description error')
            return res.sendStatus(400);
        }
        console.log('cakes 201')
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}