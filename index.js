require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.get('/google', (req,res)=>{
    res.send('google.com')
})

app.get('/tag', (req,res)=>{
    res.send('<h1>h1 tag is working </h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Its listening on port ${process.env.PORT}`)
})