const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello from second')
})

app.use((req, res, next) => {
    console.log("404 at", req.url)
    res.status(404).send("Not found from second express")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
