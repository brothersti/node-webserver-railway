require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Curso de Node Js',
        nombre: 'Frantz Hilaire'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Curso de Node Js',
        nombre: 'Frantz Hilaire'
    })
})

app.get('/elements', (req, res) => {
    es.render('elements', {
        titulo: 'Curso de Node Js',
        nombre: 'Frantz Hilaire'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})