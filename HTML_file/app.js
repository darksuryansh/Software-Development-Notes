// 3. HTML file

const http = require('http');
const fs= require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const filePath = __dirname + '/index.html';
    const fileContent = fs.readFileSync(filePath);
    res.end(fileContent)
    

    
}); 

server.listen(3000, () => {
    console.log("server running");
    console.log("http://localhost:3000");

})