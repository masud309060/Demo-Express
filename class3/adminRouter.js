const express = require('express');
const adminRouter = express.Router();

const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} ${req.ip}`)
    next();
}

const errorMiddleware = (err, req, res, next) => {
    res.status(500).send('There was a server side error')
    console.log(err.message);
}

adminRouter.use(logger);
adminRouter.use(errorMiddleware);

adminRouter.get('/', (req, res) => {
    res.send('Admin page')
    throw new Error('This is an Error')
})

adminRouter.get('/login', (req, res) => {
    res.send('Admin login page')
})

adminRouter.get('/dashboard', (req, res) => {
    res.send('Admin dashboard')
})

module.exports = adminRouter;