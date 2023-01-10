import { connection } from "../../db/database.js";

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