const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    switch (url) {
        case '/':
            res.write('<h1>Hello!!!</h1>');
            res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
            res.end();
            break;


        case '/users':
            res.write('<ul><li>User1</li> <li>User2</li><li>User3</li></ul>');
            res.end();
            break;

        case '/create-user':
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split("=")[1];
                console.log(message);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })


            break;

        default:
            res.end();
            break;
    }
}

exports.handler = requesthandler;