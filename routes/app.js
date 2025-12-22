// 4 Routes

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page\n');
    }
    else if (req.url === '/api/user') {
        const user = {
            name: "Suryansh Sharma",
            age: 21,
            email: "suryansh@gmail.com"

        }

        const data = JSON.stringify(user);
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(data);
    }
    else if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Login Successfully\n');

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/HTML' });
        res.end('<h1>Page Not Found</h1>\n');
    }


    // API - GET , POST, PUT, DELETE, PATCH



}); 

server.listen(8000, () => {
    console.log("server running");

})