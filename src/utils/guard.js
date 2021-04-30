module.exports = function(req, res, next) {
    const header = req.headers["authorization"]
    if(!header) return res.send({ code: 401 })
    if(header !== "Ym9vbWVyLHZzZmtra2tr") return res.send({ message: "Invalid secret", code: 401 })
    next()
}