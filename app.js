const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send(`Hello YOU`)
})

const PORT = process.env.PORT || 88

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})