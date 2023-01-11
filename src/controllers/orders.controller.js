import dayjs from "dayjs";
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
        return res.status(500).send(error);
    }
}

export async function orders(req, res) {
    try {
        const date = req.query.date;
        const ordersCreated = await connection.query(
            `SELECT 
            clients.id as "clientId", 
            clients.name as "clientName", 
            clients.address, 
            clients.phone, 
            cakes.id as "cakeId", 
            cakes.name as "cakeName", 
            cakes.price, cakes.image, 
            cakes.description, 
            orders.id as "orderId", 
            quantity, 
            "createdAt", 
            totalprice 
                FROM orders
                JOIN cakes ON orders."cakeId"=cakes.id
                JOIN clients ON orders."clientId"=clients.id
            `
        );

        if(ordersCreated.rowCount === 0) {
            return res.sendStatus(404);
        }

        const ordersList = [];

        for(let i = 0; i < ordersCreated.rows.length; i++) {
            const client = {
                id: ordersCreated.rows[i].clientId,
                name: ordersCreated.rows[i].clientName,
                address: ordersCreated.rows[i].address,
                phone: ordersCreated.rows[i].phone
            }

            const cake = {
                id: ordersCreated.rows[i].cakeId,
                name: ordersCreated.rows[i].cakeName,
                price: ordersCreated.rows[i].price,
                description: ordersCreated.rows[i].description,
                image: ordersCreated.rows[i].image
            }

            const order = {
                client,
                cake,
                orderId: ordersCreated.rows[i].orderId,
                createdAt: dayjs(ordersCreated.rows[i].createdAt).format("YYYY-MM-DD HH:mm"),
                quantity: ordersCreated.rows[i].quantity,
                totalPrice: ordersCreated.rows[i].totalprice
            }

            if(!date || date === dayjs(order.createdAt).format("YYYY-MM-DD")) {
                ordersList.push(order);
            }
        }

        if(ordersList.length < 1) {
            return res.status(404).send([]);
        }

        res.status(200).send(ordersList);
    } catch (error) {
        res.status(500).send(error);
    }
}

export async function orderByid(req, res) {
    try {
        const id = req.params.id;
        
        const ordersCreated = await connection.query(
            `SELECT 
            clients.id as "clientId", 
            clients.name as "clientName", 
            clients.address, 
            clients.phone, 
            cakes.id as "cakeId", 
            cakes.name as "cakeName", 
            cakes.price, cakes.image, 
            cakes.description, 
            orders.id as "orderId", 
            quantity, 
            "createdAt", 
            totalprice 
                FROM orders
                JOIN cakes ON orders."cakeId"=cakes.id
                JOIN clients ON orders."clientId"=clients.id
                WHERE orders.id=$1
            `,
            [id]
        );

        if(ordersCreated.rowCount === 0) {
            return res.sendStatus(404);
        }
        
        const client = {
            id: ordersCreated.rows[0].clientId,
            name: ordersCreated.rows[0].clientName,
            address: ordersCreated.rows[0].address,
            phone: ordersCreated.rows[0].phone
        }
    
        const cake = {
            id: ordersCreated.rows[0].cakeId,
            name: ordersCreated.rows[0].cakeName,
            price: ordersCreated.rows[0].price,
            description: ordersCreated.rows[0].description,
            image: ordersCreated.rows[0].image
        }
    
        const orderById = {
            client,
            cake,
            orderId: ordersCreated.rows[0].orderId,
            createdAt: dayjs(ordersCreated.rows[0].createdAt).format("YYYY-MM-DD HH:mm"),
            quantity: ordersCreated.rows[0].quantity,
            totalPrice: ordersCreated.rows[0].totalprice
        }

        res.status(200).send(orderById);
    } catch (error) {
        res.status(500).send(error);
    }
}