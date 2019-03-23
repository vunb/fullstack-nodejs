import express from "express";

let port = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Home page works!');
})

app.get('/todo', (req, res) => {
    res.locals.people = ['vunb', 'kiennp', '...']
    res.render('todo')
})

app.listen(port, () => console.log(`Server started at ${port}`))
