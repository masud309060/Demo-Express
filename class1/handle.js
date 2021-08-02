const handle = (req, res) => {
    console.log(req.app.locals.title) // here we access the local object in req parameter.
    res.send('This is Home page')
}

module.exports = handle;


// index.js
/* 

app.param('id', (req, res, next, id) => { 
    // app.param is a middleware it runs before the main request call
    const user = {
        userId: id,
        name: 'Bangladesh'
    }
    req.userDetails = user;
    next();
})

admin.get('/dashboard/hello', (req, res) => {
    console.log(admin.mountpath)
    res.send('This is Admin dashboard')
})

app.use('/admin', admin);

*/