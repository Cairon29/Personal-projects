import http  from 'http'; 

const processRequest = (req, res) => {
    
    if (req.url === '/home' && req.method == 'GET') {
        res.setHeader("Content-type", "text/plain; charset=utf-8");
        res.statusCode = 200;
        res.end("welcome to your home endpoint");

    } else if (req.url === '/aboutRequest' && req.method == 'GET') {
        res.setHeader("Content-type", "text/plain; charset=utf-8");
        res.statusCode = 200;

        const reqInformation = {
            method: req.method,
            url: req.url,
            headers: req.headers
        }

        res.end(JSON.stringify(reqInformation));
    }
}

const server = http.createServer(processRequest);

server.listen(3001, () => {
    console.log('server is running on port 3001\n its extact url is http://localhost:3001');
})