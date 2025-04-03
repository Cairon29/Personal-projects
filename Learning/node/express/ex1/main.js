import express from 'express';

const app = express();

app.disable('x-powered-by');


// ↓ middleware logic ↓ to handle the request. It has to go before all routes to be taken into account since express reads everything from top to bottom
app.use((req, res, next) => {
    if (req.method === 'GET' && req.url === '/home') {
        console.log('Middleware home');
        next();
    } else if (req.method === 'POST' && req.url === '/user') {
        console.log('Middleware user');
        next();
    }
})

app.get('/home', (req, res) => {
    res.status(200).json("Here is your home page");
})
app.post('/user', (req, res) => {
    let data = '';

    req.on('data', (chunk) => {
        data += chunk;
    })

    req.on('end', () => {
        res.send("user created");
    })
})

app.use((req, res) => {
    res.status(404).json("Page not found");
})

app.listen(3002, () => {
    console.log('server is running on port 3002\n its extact url is http://localhost:3002');
})