// const http = require('http');
const path = require('path');

const express = require('express');
const { exit } = require('process');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

// app.use();
// Attends for al kind of request POST, GET etc
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// cath all middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// const server = http.createServer(app);
app.listen(3000, () => {
    console.log('Greeting from Node JS')
});

// start server on port 3000
// server.listen(3000, () => {
//     console.log('Greeting from Node JS')
// });