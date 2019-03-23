var http = require('http');

var server = http.createServer((req, res) => {

    res.write('Home Page works!');
    res.end();

});

server.listen(3000, () => console.log('Server started!'));