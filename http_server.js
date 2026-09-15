const http = require('http');
const PORT = 3000;  // changed from 3005
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    // set status code and headers  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Custom-Header', 'My Custom Header');
    // send response
    res.end('Hello, World!\n');
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});