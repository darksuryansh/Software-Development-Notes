// 5. API with Node.js

const http = require('http');

const server = http.createServer((req, res) => {
    

    // API - GET , POST, PUT, DELETE, PATCH

    if (req.method === 'POST' && req.url === "/submit") {
        let body = '';
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            console.log("Received data:", body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: "Account created successfully" }));
        });


    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: "Failure" }));
    }


}); 

server.listen(8000, () => {
    console.log("server running");
    console.log("http://localhost:8000");

})