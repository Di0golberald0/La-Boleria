import { connection } from "../../db/database.js";

export async function cakes(req, res) {
    try {
        const { name, price, description} = req.body;
        
        if (name.lenght < 2) {
            console.log('name error')
            return res.sendStatus(400);
        };
        console.log('checked name')

        
        if (price < 1) {
            console.log('price error')
            return res.sendStatus(400);
        };

        if(description.lenght > 0 && description.type !== String) {
            console.log('description error')
            return res.sendStatus(400);
        };
        
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}