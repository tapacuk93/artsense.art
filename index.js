const http = require('node:http');
const fs = require('fs').promises;

const hostname = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
        });
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`);
});