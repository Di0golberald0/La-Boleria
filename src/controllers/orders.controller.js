import { connection } from "../../db/database.js";

export async function order(req, res) {
    try {
        const { clientId, cakeId, quantity, totalPrice } = req.body;

        const findClientId = await connection.query(
            `SELECT * FROM clients WHERE id = $1 `,
            [clientId]
        );
        
        if (findClientId.rowCount === 0) {
            return res.status(404).send('clientId does not exist');
        };

        const findCakeId = await connection.query(
            `SELECT * FROM cakes WHERE id = $1 `,
            [cakeId]
        );
        
        if (findCakeId.rowCount === 0) {
            return res.status(404).send('cakeId does not exist');
        };

        const insertOrder = await connection.query(
            `INSERT INTO orders(
                "cakeId", "clientId", quantity, totalprice)
                VALUES ($1, $2, $3, $4)`,
                [cakeId, clientId, quantity, totalPrice]
        );
        
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}

export async function orders(req, res) {
    try {
        console.log("orders");
        res.sendStatus(200);
    } catch (error) {
        res.send(error).status(500);
    }
}

export async function ordersInfo(req, res) {
    try {
        console.log("ordersInfo");
        res.sendStatus(200);
    } catch (error) {
        res.send(error).status(500);
    }
}