var fs = require('fs');

const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader("Content-Type", "text/html");
    if (url === '/') {

        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk)
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/')  // The Location response header indicates the URL to redirect a page to. It only provides a meaning when served with a 3xx (redirection) or 201 (created) status response.
                return res.end();
            });
        });


    }

    res.write("<h1>MyPage</h1>");
    res.end();
}

module.exports = requesthandler;
// module.exports = {
//     handler: requesthandler,
//     text: "Some Text"
// }
// exports.handler = requesthandler;