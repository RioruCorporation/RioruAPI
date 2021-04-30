const app = require("../..");
const { readdirSync } = require('fs')
const b = '/locales'

app.use(`${b}/:locale`, (req, res) => {
    const locale = req.params["locale"]
    let q = req.query["q"]
    
    if(!q) return res.send({ code: 401 })
    q = q.split(":")
    
    if(q.length === 1) return res.send({ response: q.join(" "), message: "this uri translation is incorrect but here's your text back" })
    
    if(!readdirSync("./src/translate/RioruLocales").includes(locale)) return res.send({ message: `The locale "${locale}" is not avaliable or not exists` })

    const f = require(`./RioruLocales/${locale}/${q[0]}.json`)
    let finalVal = ""
    
    for (let i = 1; i < q.length; i++) finalVal += "?." + q[i]
    
    const ev = eval(`f${finalVal}`)

    if(!ev) 
        res.send({ response: q.join(" ") })
    else 
        res.send({ response: ev })
})