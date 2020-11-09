const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

// inicia el servidor en puerto 3000
server.listen(3000, () => {
    console.log('Greeting from Node JS')
} );