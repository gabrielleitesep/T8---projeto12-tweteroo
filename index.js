import express from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.listen(5000, () => console.log('App rodando na porta 5000'))

const usuarios = []
const tweets = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body
    usuarios.push({ username, avatar })
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body
    tweets.push({ username, tweet})
    res.send('OK')
})

app.get('/tweets', (req, res) => {
    const ultimosTweets = tweets.slice(-10)
    res.send(ultimosTweets)
})