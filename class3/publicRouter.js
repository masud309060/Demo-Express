const express = require('express');
const publicRouter = express.Router();

// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'Admin' : 'Annonymous';
//     console.log('I am called once!');
//     next();
// })

// publicRouter.param(( param, option ) => (req, res, next, id) => {
//     if(id === option) {
//         req.user = option
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// })

// publicRouter.param('user', '12')

// publicRouter.get('/:user', (req, res) => {
//     res.send(`Helo ${req.user}`)
// })

publicRouter.route('/user').all((req, res, next) => {
        console.log('I am logged in')
        next();
    })
    .get((req, res) => {
        res.send('Get')
    })
    .post((req, res) => {
        res.send('Post')
    })
    .put((req, res) => {
        res.send('pull')
    })
    .delete((req, res) => {
        res.send('delete')
    });

module.exports = publicRouter;