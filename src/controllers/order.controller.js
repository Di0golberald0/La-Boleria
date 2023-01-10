import { connection } from "../../db/database.js";

export async function order(req, res) {
    try {
        const { clientId, cakeId, quantity, totalPrice } = req.body;
        console.log('checking order')

        console.log("clientId", clientId)                
        const findClientId = await connection.query(
            `SELECT * FROM clients WHERE id = $1 `,
            [clientId]
        );
        
        if (!findClientId) {
            console.log('clientId does not exist')
            return res.sendStatus(404);
        };

        console.log(cakeId) 
        const findCakeId = await connection.query(
            `SELECT * FROM cakes WHERE id = $1 `,
            [cakeId]
        );
        
        if (!findCakeId) {
            console.log('cakeId does not exist')
            return res.sendStatus(404);
        };
        
        console.log(quantity) 
        if (!quantity || quantity < 1|| quantity > 4) {
            console.log('quantity error')
            return res.sendStatus(400);
        };
        console.log(totalPrice)                 
        const insertOrder = await connection.query(
            `INSERT INTO order(
                quantity, totalPrice)
                VALUES ($1, $2)`,
                [quantity, totalPrice]
        );
        console.log('insertOrder') 
        console.log(insertOrder) 
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}