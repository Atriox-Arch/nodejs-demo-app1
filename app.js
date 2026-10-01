const http = require("http");

const PORT = 3000;

const message = "Hello from my DevOps CI/CD Pipeline!";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${message}</h1>`);
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { message };