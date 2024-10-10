const http = require('http');
const server = http.createServer();
const fs = require('fs');
const path = require('path');


server.on('request', (req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    } else {
        filePath = path.join(__dirname, filePath, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('404 Not Found');
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server started on localhost:3000");
})
