const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

const {SECOND = "http://localhost:3001"} = process.env

app.get('/', async (req, res) => {
    try {
        const respSecond = await axios.get(SECOND)
        res.send("Hello from first... " + respSecond.data)
    } catch (e) {
        console.error(e)
        res.send("Connection error")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
