import dayjs from "dayjs";
import { connection } from "../../db/database.js";

export async function clients(req, res) {
    try {
        const { name, address, phone } = req.body;
        
        const insertClient = await connection.query(
            `INSERT INTO clients(name, address, phone)
            VALUES ($1, $2, $3);`,
                [name, address, phone]
        );
        
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function ordersByClient(req, res) {
    try {
        const id = req.params.id;

        const existingClient = await connection.query(
            `SELECT * FROM clients WHERE id=$1 `,
            [id]
        );
        
        if (existingClient.rowCount < 1) {
            return res.status(404).send('client does not exist');
        };
        
        const ordersByClientList = await connection.query(
            `SELECT  
            orders.id as "orderId", 
            orders.quantity, 
            orders."createdAt", 
            orders.totalprice as "totalPrice",
            cakes.name as "cakeName"
                FROM orders
                JOIN cakes ON orders."cakeId"=cakes.id
                WHERE orders."clientId"=$1
            `,
            [id]
        );
        
        if(ordersByClientList.rowCount < 1) {
            return res.status(404).send('client has not made any orders');
        }

        const ordersByClient = [];
        
        for(let i = 0; i < ordersByClientList.rows.length; i++) {
            const order = {
                orderId: ordersByClientList.rows[i].orderId,
                createdAt: dayjs(ordersByClientList.rows[i].createdAt).format("YYYY-MM-DD HH:mm"),
                quantity: ordersByClientList.rows[i].quantity,
                totalPrice: ordersByClientList.rows[i].totalPrice,
                cakeName: ordersByClientList.rows[i].cakeName
            }

            ordersByClient.push(order);
        }
        
        res.status(200).send(ordersByClient);
    } catch (error) {
        res.status(500).send(error);
    }
}