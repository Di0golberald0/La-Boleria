export async function order(req, res) {
    try {
        console.log("teste")
        res.sendStatus(200)
    } catch (error) {
        res.send(error).status(500)
    }
}