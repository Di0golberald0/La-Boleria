import { connection } from "../../db/database.js";

export async function clients(req, res) {
    try {
        const { name, address, phone } = req.body;
        console.log('checking client', name, address, phone)
        const insertClient = await connection.query(
            `INSERT INTO clients(name, address, phone)
            VALUES ($1, $2, $3);`,
                [name, address, phone]
        );
        console.log('insertClient')
        console.log(insertClient)
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}

export async function ordersByClient(req, res) {
    try {
        console.log("ordersByClient");
        res.sendStatus(200);
    } catch (error) {
        res.send(error).status(500);
    }
}