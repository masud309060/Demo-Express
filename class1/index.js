const express = require('express');

const app = express();
const admin = express();

app.set('view engine', 'ejs');

// app.locals.title = 'This is local title' // it's a object we can set poperty on this

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails)
    res.send('This is Home page')
})

app.route('/about/mission')
    .get((req, res) => {
        res.render('pages/about.ejs')
    })
    .post((req, res) => {
        res.send('This is about with post')
    })
    .put((req, res) => {
        res.send('This is about with put')
    })


app.listen(3000, () => console.log('listen on the port 3000'))