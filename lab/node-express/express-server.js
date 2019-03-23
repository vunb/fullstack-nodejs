var express = require('express')

var app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Home Page works!')
})

app.get('/about', (req, res) => {
    res.send('About page here!')
})

app.get('/todo', (req, res) => {
    let people = ['geddy', 'neil', 'alex'];
    res.locals.people = people;

    res.render('todo')
})

app.listen(3000, () => console.log('Server started!'))
