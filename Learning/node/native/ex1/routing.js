import http from 'http';

const processRequest = (req, res) => {
    switch (req.url) {
        case '/home': {
            res.setHeader("Content-type", "text/plain; charset=utf-8");
            res.statusCode = 200;
            res.end("Here is your home page");
            break;
        }

        case '/about': {
            res.setHeader("Content-type", "text/plain; charset=utf-8");
            res.statusCode = 200;

            const reqInformation = {
                method: req.method,
                url: req.url,
                headers: req.headers
            }    
            res.end(JSON.stringify(reqInformation));
            break;
        }
        case '/dummyPage' : {
            res.setHeader("Content-type", "text/html; charset=utf-8");
            res.statusCode = 200;
            res.end(`<h1> this is a dummy page </h1>`);
            break;
        }
    }
}

const server = http.createServer(processRequest);

server.listen(3002, () => {
    console.log('server is running on port 3002\n its extact url is http://localhost:3002');
})