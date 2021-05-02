const route = require('express').Router()
const { readdirSync } = require('fs')

route.use('/', (req, res) => {
    const locale = req.body.locale
    let q = req.body.query
    if(!locale) return res.send({ message: "You need provide the locale", code: 401 })
    
    if(!q) return res.send({ message: "You need provide the query", code: 401 })
    q = q.split(":")
    
    if(q.length === 1) return res.send({ response: q.join(" "), message: "this uri translation is incorrect but here's your text back" })
    if(!readdirSync("./src/translate/RioruLocales").includes(locale)) return res.send({ message: `The locale "${locale}" is not avaliable or not exists` })
    
    const f = require(`../translate/RioruLocales/${locale}/${q[0]}.json`)
    let finalVal = ""
    
    for (let i = 1; i < q.length; i++) finalVal += "?." + q[i]
    
    const ev = eval(`f${finalVal}`)
    if(!ev) res.send({ response: q.join(" ") })
    else res.send({ response: ev })
})

module.exports = route