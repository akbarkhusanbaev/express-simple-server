const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

axios.post(`https://api.telegram.org/bot1421190534:AAEfEhWJoQBJqJJuPjTimcEKhQId7VtHap4/setWebhook`, {
    url: `https://safe-savannah-20412.herokuapp.com/bot1421190534:AAEfEhWJoQBJqJJuPjTimcEKhQId7VtHap4`
}).then(res => {
    console.log(res.data)
})

app.get('/', (req, res) => {
    res.status(200).json({message: `CORS connected`})
})

app.post('/bot1421190534:AAEfEhWJoQBJqJJuPjTimcEKhQId7VtHap4', (req, res) => {
    if (req.body.message.text === '/start') {
        return axios.post(`https://api.telegram.org/bot1421190534:AAEfEhWJoQBJqJJuPjTimcEKhQId7VtHap4/sendMessage`, {
            chat_id: req.body.message.chat.id,
            text: 'Answer'
        })
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})