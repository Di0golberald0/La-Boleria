export async function cakes(req, res) {
    try {
        const cake = req.body;
        console.log(cake)
        res.sendStatus(200)
    } catch (error) {
        res.send(error).status(500)
    }
}