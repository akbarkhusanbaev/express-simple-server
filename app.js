const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 88

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: `CORS connected`})
})

app.post('/bot1421190534:AAEfEhWJoQBJqJJuPjTimcEKhQId7VtHap4', (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'smth'})
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})