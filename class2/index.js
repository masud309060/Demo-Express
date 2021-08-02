const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const adminRouter = express.Router();

// middleware || parser 
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.cookie('name', 'Masud Rana');
    res.end()
    // res.format({
    //     'text/plain': () => {
    //         res.send('hi')
    //     },
    //     'text/html': () => {
    //         res.render('pages/about', {
    //             name: 'Masud Rana'
    //         })
    //     },
    //     'application/json': () => {
    //         res.json({name: 'json Mia'})
    //     },
    //     default: () => {
    //         res.status(406).send('Not Acceptable')
    //     }
    // })

})


app.listen(3000, () => console.log('app is running on port 3000'))