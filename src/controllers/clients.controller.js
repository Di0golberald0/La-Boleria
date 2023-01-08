export async function clients(req, res) {
    try {
        const client = req.body;
        console.log(client)
        console.log('checking client')
        if (!client.name) {
            console.log('name error')
            return res.sendStatus(400);
        };
        
        if (!client.address) {
            console.log('address error')
            return res.sendStatus(400);
        };

        if(!client.phone) {
            console.log('phone error')
            return res.sendStatus(400);
        };
        console.log('clients 201')
        return res.sendStatus(201);
    } catch (error) {
        return res.send(error).status(500);
    }
}