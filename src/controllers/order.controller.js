export async function order(req, res) {
    try {
        const order = req.body;
        console.log(order)
        console.log('checking order')
                
        const findClientId = await connection.query(
            `SELECT * FROM clients WHERE id = $1 `,
            [order.clientId]
        );
      
        if (!findClientId) {
            console.log('clientId does not exist')
            return res.sendStatus(404);
        };

        const findCakeId = await connection.query(
            `SELECT * FROM cakes WHERE id = $1 `,
            [order.cakeId]
        );
      
        if (!findCakeId) {
            console.log('cakeId does not exist')
            return res.sendStatus(404);
        };

        if (!order.quantity || order.quantity < 1|| order.quantity > 4) {
            console.log('quantity error')
            return res.sendStatus(400);
        };
        console.log('order 201')
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}