const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {})
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {})
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        PageTitle: 'Strona Kontakt'
    })
});

app.listen(5000, () => {
    console.log("serwer dziala")
});

